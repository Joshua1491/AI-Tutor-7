"use client";
import React from "react";
import DifficultyChip from "./DifficultyChip";
import { Video } from "../types";

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <iframe
      className="h-40 w-full sm:h-48 md:h-56 lg:h-40 xl:h-48 2xl:h-56"
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default function VideoBank({ videos }: { videos: Video[] }) {
  if (!videos.length)
    return <p className="text-sm text-muted-foreground">No videos found.</p>;

  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <li
          key={v.id}
          className="space-y-2 overflow-hidden rounded-2xl border bg-card shadow-sm"
        >
          <YouTubeEmbed id={v.youtube_id} title={v.title} />
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-2 text-sm font-medium leading-snug">
              {v.title}
            </h3>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{Math.round(v.duration_seconds / 60)} min</span>
              <DifficultyChip level={v.difficulty} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
