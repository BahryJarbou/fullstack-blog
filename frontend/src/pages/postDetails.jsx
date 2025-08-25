import { Edit, Trash } from "lucide-react";
const PostDetails = () => {
  return (
    <div className="flex gap-[50px]">
      <div className="flex-5 space-y-4">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt=""
          className="h-100 w-[50%]  object-cover"
        />
        <div className=" flex gap-2">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="h-[50px] w-[50px] rounded-full object-cover "
          />
          <div>
            <span className="text-lg">Peter John</span>
            <p className="text-sm"> Posted 2 days ago</p>
          </div>

          <div className="edit flex ">
            <Edit className="w-6 h-6 text-blue-500 cursor-pointer" />
            <Trash className="w-6 h-6 text-red-500 cursor-pointer" />
            {/* edit and trash are lucide components which i imported */}
          </div>
        </div>
        <h1 className="text-3xl font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          possimus sint nam commodi soluta exercitationem cum dicta adipisci.
        </h1>
        <p className="text-justify leading-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          molestiae pariatur voluptatem eveniet adipisci ipsam alias dignissimos
          delectus debitis, ab cupiditate laudantium architecto voluptate iure
          animi excepturi reprehenderit ex itaque fugit minus. Rem facere minima
          voluptas ad assumenda. Sed facere error, voluptatum harum veniam
          similique, architecto natus a itaque quia velit quae temporibus quod
          distinctio maiores cumque. Blanditiis pariatur placeat molestiae quia
          consequuntur, quaerat exercitationem possimus autem unde corporis enim
          harum aliquam ab expedita, asperiores excepturi veniam inventore fugit
          optio odio vel dolor. Aut at nisi et ex facere repellendus mollitia!
          Nemo harum neque corrupti? Minima illo nam sunt commodi inventore.
          Laboriosam, ducimus repellat sapiente expedita nulla voluptas atque
          neque aliquam! Architecto officiis inventore aut recusandae similique,
          consequatur enim dolor quo minus voluptate praesentium eaque aliquam
          deleniti repellendus! Placeat totam excepturi odio corporis omnis
          voluptate tenetur cupiditate. Culpa sed ullam aperiam quasi placeat,
          iure quaerat error maxime voluptate architecto ducimus corrupti modi
          doloribus. Nulla illum dicta ex omnis, voluptatem alias dignissimos?
          Repellendus laudantium et, sequi libero animi unde eius harum
          nesciunt, natus tempora fuga praesentium reiciendis consectetur
          dignissimos. Omnis, ut placeat reiciendis expedita libero nobis
          nostrum voluptas aspernatur deserunt iusto soluta deleniti. Illo
          labore cum aliquid repellat aspernatur commodi natus.
        </p>
      </div>
      <div className="flex-2">M</div>
    </div>
  );
};

export default PostDetails;
