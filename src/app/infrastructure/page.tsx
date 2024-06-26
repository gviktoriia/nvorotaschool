"use client";

import Navbar from "@/components/Hero/Navbar";
import InfrastructureCard from "@/components/Infrastructure/InfrastructureCard";

const page = () => {
  const infrastructure = [
    {
      title: "Комп'ютерні класи та ІТ-інфраструктура",
      paragraph:
        "На території школи розташовані два комп'ютерні класи, обладнані сучасною технікою та програмним забезпеченням, що відповідає сучасним вимогам навчання. Учні мають можливість використовувати інтерактивні дошки, ноутбуки, мультимедійні проектори, а також вчителі використовують комп'ютери для підготовки та проведення уроків.",
      image: "/class_photo1.png",
    },
    {
      title: "Навчально-методичне забезпечення",
      paragraph:
        "Наша школа регулярно поповнює свій фонд навчальної літератури, яка відповідає вимогам програм та потребам учнів. У бібліотеці школи представлено різноманіття книг, журналів та довідкової літератури з різних предметів. Також у школі є актова зала й історико-краєзнивчий музей.",
      image: "/library_photo.jpg",
    },
    {
      title: "Спортивний комплекс",
      paragraph:
        "Для фізичного розвитку учнів у школі є спортивний комплекс з сучасним обладнанням, який включає спортивний зал, штучне футбольне поле, волейбольне поле та спортивний майданчик із гімнастичним обладнанням. Учні можуть займатися різними видами спорту під керівництвом досвідченого вчителя.",
      image: "/field_photo.jpg",
    },
    {
      title: "Безпека та комфорт",
      paragraph:
        "Школа підтримує високі стандарти безпеки та комфорту для учнів і працівників. Ми регулярно проводимо технічне обслуговування приміщень та обладнання, забезпечуємо належний рівень освітлення та вентиляції, а також дотримуємося всіх санітарних та гігієнічних норм. Окрім того учні школи забезпечуються гарячим харчуванням.",
      image: "/class_photo2.jpg",
    },
    {
      title: "Умови доступу осіб з обмеженими фізичними можливостями",
      paragraph:
        "У закладі створено безперешкодний доступ до будівлі, а саме облаштовано пандус для осіб з обмеженими фізичними можливостями.",
    },
  ];
  return (
    <section className="bg-black">
      <Navbar />
      <div className="bg-white pl-10 pr-10 pb-10">
        <h2 className="text-center justify-center bold-20 pt-6 mb-6">
          Матеріально-технічне забезпечення
        </h2>
        <div>
          {infrastructure.map((obj, index) => (
            <InfrastructureCard
              key={index}
              title={obj.title}
              paragraph={obj.paragraph}
              image={obj.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
