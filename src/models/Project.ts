export type ProjectStatus = "ongoing" | "completed";

export interface Project {
    title: string;
    description: string;
    longDescription: string;
    status: ProjectStatus;
    tech: string[];
    topics: string[];
    image?: string;
    imageHalfWidth?: boolean;
    githubUrl?: string;
}