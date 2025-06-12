"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function CourseList() {
  const [courseList, setCourseList] = useState([]);

  return (
    <div className="p-6">
      <h2 className="font-bold text-3xl mb-6 text-white">Course List</h2>

      {courseList.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 border border-zinc-700 bg-zinc-900 rounded-xl shadow-sm text-gray-400">
          <Image
            src="/online-learning.png"
            alt="Online Education"
            width={120}
            height={120}
            className="mb-6 opacity-80"
          />
          <h3 className="text-lg mb-4 text-center">
            Looks like you haven&apos;t created any courses yet.
          </h3>
          <Button variant="default">Create Your First Course</Button>
        </div>
      ) : (
        <div className="p-6 border border-zinc-700 bg-zinc-900 rounded-xl shadow-sm text-gray-200">
          {/* Example content for when courses exist */}
          List of Courses
        </div>
      )}
    </div>
  );
}

export default CourseList;
