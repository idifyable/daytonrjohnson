import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllProjectIds, getProjectData } from '@lib/projects';
import Layout from '@components/Layout';
import { Date } from '@components/Date';

interface Props {
  postData: any;
}

export const Post: NextPage<Props> = ({ postData }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getProjectData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
