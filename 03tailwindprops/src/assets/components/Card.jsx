import React from "react";

function Card() {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img
          class="size-48 shadow-xl rounded-md"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPnYGf_CtSVuxlVxLFNfeD14TCwWchRriMsY238HxYw&s"
        />
      </div>
      <div class="flex">
        <span class="text-2xl font-medium">Class Warfare</span>
        <span class="font-medium text-sky-500">The Anti-Patterns</span>
        <span class="flex g">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
