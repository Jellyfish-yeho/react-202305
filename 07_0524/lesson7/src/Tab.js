import { useState } from "react";

const useTab = (initialTab, allTab) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return { currentItem: allTab[currentIndex], changeItem: setCurrentIndex };
};

function Tab() {
  const content = [
    {
      tab: "section1",
      content: "I am section1",
    },

    {
      tab: "section2",
      content: "I am section2",
    },
  ];
  const { currentItem, changeItem } = useTab(0, content);
  return (
    <div>
      {content.map((item, idx) => (
        <button key={idx} onClick={() => changeItem(idx)}>{item.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default Tab;
