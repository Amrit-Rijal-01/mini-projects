import Card from "@/app/ui/cards";

export default function Home() {


   return (
      <div className="">
         <div className="flex flex-col items-center">
            <div className="my-4">
               <h2 className="text-xl ">List of Projects</h2>
            </div>
            <div className="flex flex-wrap p-4 justify-center">
               <Card
                  title="Task Management"
                  src="task-management"
               />
               <Card
                  title="Weather App"
                  src="weather-app"
               />
               <Card
                  title="Movie Database"
                  src="movie-database"
               />
               <Card
                  title="Quiz App"
                  src="quiz-app"
               />
               <Card
                  title="To-Do List with Notifications"
                  src="todo-list"
               />
               <Card
                  title="Real-Time Chat App"
                  src="chat-app"
               />
               <Card
                  title="Cryptocurrency Tracker"
                  src="cryptocurrency-tracker"
               />
               <Card
                  title="eCommerce Product Viewer"
                  src="ecommerce-product-viewer"
               />
               <Card
                  title="Recipe Finder"
                  src="recipe-finder"
               />
               <Card
                  title="GitHub Profile Viewer"
                  src="github-profile-viewer"
               />
            </div>
         </div>
      </div>
   );
}