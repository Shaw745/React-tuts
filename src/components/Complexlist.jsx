import React from "react";

const Complexlist = () => {
  const staff = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwE7RGI1u_gQ-PtMOVp0lRZxMkp-GGWrRqw&s",
      name: "John Doe",
      role: "Chief operation officer",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5l6A3RpPnDAv4h23uzid_zTR0TkJzXVu-Q&s",
      name: "Peter pan",
      role: "Head of finance",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1ZH5LTCiRY21lQkxygYFkwUqrVd5E6LTmg&s",
      name: "Jane Doe",
      role: "Head Of Markerting",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoziFGIR2vKDB1BGC8-danALCyuBEFACokw&s",
      name: "Liu King",
      role: "Creative Director",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUV8YxMyKb_f2FaoxgC3yoZ6HukTzfmQiwg&s",
      name: "Sonya Blade",
      role: "Financial Secretary",
    },
  ];
  const {id, image,role,name} = member;
  return (
    <div className="bg-blue-200 py-10">
      <h1 className="text-center text-blue-950 text-4xl font-bold">Meet The Team</h1>
      <p className="my-5 text-center text-md text-black w-[600px] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        blanditiis itaque eum aperiam, assumenda dolor quo, perspiciatis sed
        quas iusto sequi voluptatem provident, harum nemo dolores fugit quia
        vero suscipit
      </p>
      <div className="flex gap-3.5 max-w-[1000px] flex-wrap mx-auto" >
        {staff.map((member)=>{
            return <div key={id} className="w-[320px] bg-white p-2.5 rounded-md">
                <img src={image} alt={name} className="rounded-md h-[300px] w-full object-cover "/>
                <h1 className="text-blue-800 font-bold text-2xl mt-3">{name}</h1>
                <p className="text-gray-500 font-semibold "> {role}</p>
            </div>
        })}
      </div>
    </div>
  );
};

export default Complexlist;
