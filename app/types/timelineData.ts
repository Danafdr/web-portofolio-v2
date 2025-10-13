// types/timelineData.ts
export type TimelineItemType = {
  id: number;
  Month: string;
  year: number;
  title: string;
  description: string;
  position: "top" | "bottom";
  color: string;
};

export const timelineData: TimelineItemType[] = [
  {
    id: 1,
    Month: "July",
    year: 2023,
    title: "SMK Telkom Jakarta",
    description: "First Year Of Vocational High School",
    position: "top",
    color: "text-blue-500",
  },
  {
    id: 2,
    Month: "August",
    year: 2023,
    title: "Unit Produksi",
    description: "Joined SMK Telkom Jakarta's Unit Produksi Organization As A Graphic Designer",
    position: "bottom",
    color: "text-orange-400",
  },
  {
    id: 3,
    Month: "March",
    year: 2024,
    title: "SMK Telkom Jakarta Team Content",
    description: "Migrated From Unit Produksi To SMK Telkom Jakarta Team Content As A Video Editor",
    position: "top",
    color: "text-green-500",
  },
  {
    id: 4,
    Month: "May",
    year: 2024,
    title: "Photography & Videography Club",
    description: "Joined SMK Telkom Jakarta's Photography & Videography Club",
    position: "bottom",
    color: "text-purple-500",
  },
  {
    id: 5,
    Month: "November",
    year: 2024,
    title: "ASSA Project",
    description: "Collaborated on ASSA Project as a Motion Graphic",
    position: "top",
    color: "text-blue-500",
  },
  {
    id: 6,
    Month: "November",
    year: 2020,
    title: "Uzone",
    description: "",
    position: "bottom",
    color: "text-orange-400",
  },
  {
    id: 7,
    Month: "March",
    year: 2021,
    title: "Company Milestone",
    description: "Reached 1 million active users",
    position: "top",
    color: "text-green-500",
  },
  {
    id: 8,
    Month: "November",
    year: 2022,
    title: "Award Received",
    description: "Won best design award for innovative UI",
    position: "bottom",
    color: "text-purple-500",
  },
];