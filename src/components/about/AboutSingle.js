import avatar from "../../images/avatar.svg";

export default function AboutSingle({ imgSrc, title, subTitle, description }) {
  return (
    <div class="text-center text-gray-500 dark:text-gray-400">
      <img
        class="mx-auto mb-4 w-36 h-36 rounded-full"
        src={imgSrc || avatar}
        alt="Bonnie Avatar"
      />
      <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{title}</a>
      </h3>
      <p>{subTitle}</p>
    </div>
  );
}
