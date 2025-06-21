import CircularServices from "../circular-testimonials";

const services = [
  {
    quote:
      "מסאז' רפואי מקצועי עם שמנים ארומתרפיים טבעיים. הטיפול מותאם אישית לכל לקוח ומשלב טכניקות מסורתיות עם ידע מודרני ליצירת חוויה מרגיעה ומחדשת.",
    name: "מסאז' רפואי",
    designation: "60-90 דקות",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "חמאם טורקי מסורתי עם אדים חמים וטיפולי קילוף טבעי. החוויה כוללת חדרי אדים, בריכת מים חמים, וטיפול קילוף עם סבון אוליב מסורתי לרענון עמוק של העור.",
    name: "חמאם טורקי",
    designation: "90 דקות",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote:
      "טיפולי ארומתרפיה עם שמנים אתריים טבעיים מהמדבר. הטיפול משלב עיסוי עדין עם שמנים ארומתרפיים מותאמים אישית ליצירת הרפיה עמוקה וטיהור הנפש והגוף.",
    name: "ארומתרפיה מדברית",
    designation: "75 דקות",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

export function Services() {
  return (
    <section className=" p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div className="items-center justify-center relative flex max-w-4xl">
        <CircularServices testimonials={services} autoplay={true} />
      </div>
    </section>
  );
}
