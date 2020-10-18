import { useCallback, useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import { useHistory } from 'react-router-dom'

interface GoogleAnalyticsProps {
  analyticsId: string
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  ...props
}: GoogleAnalyticsProps): null => {
  // State
  const [enabled, setEnabled] = useState(false);
  const [previousLocationKey, setPreviousLocationKey] = useState('');

  // Setup ReactGA configuration
  if(props.analyticsId) {
    ReactGA.initialize(props.analyticsId)
    setEnabled(true);
  }

  // Track page view
  const trackPageView = (location: any) => {
    if (location.key !== previousLocationKey) {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    }

    const locationKey = location.key || '';
    setPreviousLocationKey(locationKey)
  }
  const trackPageViewCallback = useCallback(trackPageView, [previousLocationKey])

  // Attach pageview listener to history
  const history = useHistory()
  useEffect(() => {
    if(enabled) {
      const unlistenToHistory = history.listen(trackPageViewCallback)
      return () => {
        unlistenToHistory()
      }
    }
  }, [history, enabled, trackPageViewCallback])

  return null
}
