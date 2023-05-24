import Link from "next/link";


const TeacherDashboard: React.FC = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>Teacher Dashboard</div>
            <Link href={"/teacher-dashboard/create-template"}>create template</Link>
            <Link href={"/teacher-dashboard/my-exercises"}>my exercises</Link>
            <Link href={"/teacher-dashboard/my-students"}>my students</Link>
        </div>
    )
};

export default TeacherDashboard;