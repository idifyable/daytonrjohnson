import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export type Project = {
  id: string;
  sort?: number;
  title?: string;
  technologiesUsed?: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
};

const projectsDirectory = path.join(process.cwd(), '/data/projects');

export function getSortedProjectsData(): Project[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id: string = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a: Project, b: Project) => {
    if (a.sort > b.sort) {
      return 1;
    }
    return -1;
  });
}

export function getAllProjectIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getProjectData(id: string): Promise<{ id: string; contentHtml: string }> {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
