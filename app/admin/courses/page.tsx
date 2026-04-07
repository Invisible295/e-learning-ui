import CoursesHeader from "../../../components/courses/CoursesHeader";
import ActiveLearningPaths from "../../../components/courses/ActiveLearningPaths";
import DetailedCourseList from "../../../components/courses/DetailedCourseList";
import {
  COURSE_MANAGEMENT_COURSES,
  COURSE_MANAGEMENT_TOTAL_COURSES,
} from "../../../components/courses/mockData";

export default function AdminCoursesPage() {
  return (
    <>
      <CoursesHeader />

      <div className="space-y-16">
        <ActiveLearningPaths />
        <DetailedCourseList
          courses={COURSE_MANAGEMENT_COURSES}
          totalCourses={COURSE_MANAGEMENT_TOTAL_COURSES}
        />
      </div>
    </>
  );
}
