"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Project, { ProjectProps } from "./Project";

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Leuven2030 EcoFoodMap Maintenance",
      description:
        "Contributed to maintaining Leuven2030’s website, including version control and hosting optimization using Vercel.",
      skills: ["Vercel", "Version Control", "Web Hosting"],
    },
    {
      title: "Internship Follow-Up",
      description:
        "Implemented a chained workflow system where multiple parties complete interdependent question-answer polls.",
      skills: ["Java", "Spring Boot", "NextJS"],
    },
    {
      title: "Social Media Workout Tracker",
      description:
        "Created a cross-platform gym application that works seamlessly on both mobile devices and web browsers.",
      skills: ["React Native", "Expo", "React"],
    },
    {
      title: "Orchestrated Car Booking System",
      description:
        "Created a microservices-based REST API for car appointment bookings, using Spring Boot to manage the services.",
      skills: ["Java", "Spring Boot", "Microservices", "REST API"],
    },
    {
      title: "Minesweeper",
      description:
        "Developed a Minesweeper game in C#, employing the MVVM pattern for clean separation of concerns and improved testability.",
      skills: ["C#", "MVVM", "Game Development"],
    },
    {
      title: "File Compression",
      description:
        "Built a file compression utility in C++ focusing on efficient data storage and retrieval.",
      skills: ["C++", "File Compression"],
    },
    {
      title: "Shared Calendar",
      description:
        "Built a shared calendar application, utilizing Elixir and the Phoenix framework for efficient real-time updates.",
      skills: ["Elixir", "Phoenix Framework", "Real-Time Updates"],
    },
    {
      title: "Java Metro Ticket System",
      description:
        "Developed a metro ticketing system, utilizing various software design patterns to ensure scalability, maintainability, and clean code.",
      skills: ["Java", "Design Patterns"],
    },
    {
      title: "Trading History Dashboard",
      description:
        "Developed a dashboard to visualize real-time statistics of trading history, using file uploads to populate a Postgres database.",
      skills: ["JavaScript", "Postgres", "Data Visualization"],
    },
    {
      title: "Mocked SSE Stream and Data Visualization",
      description:
        "Mocked a Server-Sent Events (SSE) stream and visualized the data on a graph, demonstrating real-time data handling and display.",
      skills: ["SSE", "JavaScript", "Data Visualization"],
    },
    {
      title: "Docker Cluster in Azure",
      description:
        "Deployed a Docker cluster on Microsoft Azure to serve a web application, managing container orchestration and scaling.",
      skills: ["Docker", "Microsoft Azure"],
    },
    {
      title: "Discord Bot Integrated with OpenAI",
      description:
        "Developed a Discord bot that leverages OpenAI's API to provide intelligent conversation and interaction within a Discord server.",
      skills: ["Discord API", "OpenAI API"],
    },
    {
      title: "Cloud Accessible Raspberry Pi ",
      description:
        "Set up a Raspberry Pi to establish a reverse proxy connection on startup, making it accessible online and automatically sending the connection details to a Discord server using Apprise.",
      skills: ["Raspberry Pi", "Reverse Proxy", "Discord API", "Apprise"],
    },
    {
      title: "Flappy Bird with Power-Ups in Python",
      description:
        "Developed a Python version of Flappy Bird, incorporating power-ups to enhance gameplay.",
      skills: ["Python", "Game Development"],
    },
    {
      title: "Text Similarity Script for Workout Data",
      description:
        "Created a text similarity script that auto-corrects workout notes and exports the data to Excel for import into a workout app.",
      skills: ["Python", "Excel", "Text Processing"],
    },
  ];

  const [loadMore, setLoadMore] = useState(false);
  return (
    <div>
      <ul className="group/list">
        {projects.slice(0, 4).map((project) => {
          return (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              skills={project.skills}
            />
          );
        })}
        {loadMore &&
          projects.slice(4, -1).map((project) => {
            return (
              <Project
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                skills={project.skills}
              />
            );
          })}
        <Button
          variant={"outline"}
          onClick={() => setLoadMore((prev) => !prev)}
        >
          Load {loadMore ? "Less" : "More"}
        </Button>
      </ul>
    </div>
  );
}
