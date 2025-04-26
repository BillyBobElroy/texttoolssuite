export function getToolMetadata(title: string, description: string) {
    return {
      title: `${title} | Free Online Tool`,
      description,
      robots: {
        index: true,
        follow: true,
      },
    }
  }
  