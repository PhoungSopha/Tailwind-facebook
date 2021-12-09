<template>
  <nav class="nav__container">
    <!-- Left Nav -->
    <div class="nav__left-container">
      <a href="#" class="mr-2 hidden md:inline-block">
        <img
          src="../assets/images/fb-logo.png"
          class="nav__logo-img"
          alt="Logo-fb"
        />
      </a>
      <a href="" class="inline-block md:hidden"
        ><img src="../assets/images/fb-logo-mb.png" class="w-32 h-auto" alt=""
      /></a>
      <div class="flex justify-between items-center space-x-1">
        <div class="nav__search">
          <i class="bx bx-search-alt-2 text-xl xl:mr-1 dark:text-dark-txt"></i>
          <input
            type="text"
            placeholder="search facebook"
            class="border-none bg-transparent p-0 px-1 focus:outline-none focus:ring-0 hidden xl:inline-block"
          />
        </div>
        <div class="nav__function">
          <li class="bx bxl-messenger"></li>
        </div>
        <div class="nav__function">
          <li class="bx bx-moon"></li>
        </div>
      </div>
    </div>

    <!-- Main nav -->
    <ul class="nav__list">
      <li class="nav__item">
        <a href="#" class="nav__link-active">
          <i class="bx bxs-home"></i>
        </a>
      </li>

      <li class="nav__item">
        <a href="#" class="nav__link">
          <i class="bx bx-movie-play"></i>
        </a>
      </li>

      <li class="nav__item">
        <a href="#" class="nav__link">
          <i class="bx bx-store"></i>
        </a>
      </li>

      <li class="nav__item">
        <a href="#" class="nav__link">
          <i class="bx bx-group"></i>
        </a>
      </li>

      <li class="nav__item">
        <a href="#" class="nav__link">
          <i class="bx bx-layout"></i>
        </a>
      </li>
    </ul>

    <!-- Right Nav -->
    <ul class="hidden md:flex mx-4 items-center justify-center">
      <li class="hidden xl:flex h-full">
        <a
          href="#"
          class="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt="Profile"
            class="w-10 h-auto rounded-full"
          />
          <span class="mx-2 font-semibold dark:text-dark-txt">William</span>
        </a>
      </li>
      <li>
        <div class="nav__item-right"><i class="bx bx-plus"></i></div>
      </li>
      <li>
        <div class="nav__item-right"><i class="bx bxl-messenger"></i></div>
      </li>
      <li>
        <div class="nav__item-right"><i class="bx bxs-bell"></i></div>
      </li>
      <li>
        <div class="nav__item-moon"><i class="bx bxs-moon"></i></div>
      </li>
    </ul>
  </nav>
</template>
