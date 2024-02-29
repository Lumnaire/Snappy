import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

export function formatDate(dateString: string): string {
  const date: Date = new Date(dateString);
  const now: Date = new Date();
  const diff: number = Math.abs(now.getTime() - date.getTime()) / 1000; // difference in seconds

  const intervals: Record<string, number> = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
  };

  for (let key in intervals) {
      const interval: number = Math.floor(diff / intervals[key]);
      if (interval > 1) {
          return interval + " " + key + (interval > 1 ? "s" : "") + " ago";
      } else if (interval === 1) {
          return "1 " + key + " ago";
      }
  }

  return "Just now";
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
