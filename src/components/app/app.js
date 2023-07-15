import React from "react";
import AppHeader from "../header";
import TaskList from "../tasklist/tasklist";
import Footer from "../footer/footer";
const App = () => {
  const taskData = [
    { label: "Drink Coffe", important: false, condition: "completed", id: 1},
    { label: "Make Awesome App", important: true, condition: "", id: 2 },
    { label: "Have a lunch", important: false, condition: "editing", id: 3 },
  ];

  return (
    <section className="todoapp">
      <AppHeader />
      <section className="main">
        <TaskList todos={taskData} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
