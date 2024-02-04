import clsx from "clsx";

import "./cawio.style.scss";

export const CawioLight = ({ className }: { className?: string }) => (
  <svg className={clsx("cawio-logo", className)} viewBox="0 0 351 143" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M73.6168 40.6735C72.7865 40.3184 71.8395 40.6978 71.4843 41.5184C71.1292 42.3405 71.507 43.2941 72.3292 43.6508C91.1432 51.793 103.784 70.093 103.784 89.1892C103.784 107.043 93.9162 123.081 79.4595 132.018V111.892C79.4595 110.995 78.7346 110.27 77.8378 110.27V89.1892C77.8378 88.2924 77.113 87.5676 76.2162 87.5676H72.973V71.3513C72.973 70.4562 72.2481 69.7297 71.3514 69.7297H69.7297V63.2432C69.7297 62.3481 69.0049 61.6216 68.1081 61.6216H66.4865V58.3784C66.4865 57.4832 65.7616 56.7568 64.8649 56.7568H62.8022C62.0043 53.9854 60 45.2805 60 27.5676C60 26.6724 59.2751 25.9459 58.3784 25.9459H55.1351V1.62162C55.1351 0.726487 54.4087 0 53.5135 0C52.6184 0 51.8919 0.726487 51.8919 1.62162V25.9459H48.6487C47.7535 25.9459 47.027 26.6724 47.027 27.5676C47.027 45.2854 45.0227 53.9919 44.2249 56.7568H42.1622C41.267 56.7568 40.5405 57.4832 40.5405 58.3784V61.6216H38.9189C38.0238 61.6216 37.2973 62.3481 37.2973 63.2432V69.7297H35.6757C34.7805 69.7297 34.0541 70.4562 34.0541 71.3513V87.5676H30.8108C29.9157 87.5676 29.1892 88.2924 29.1892 89.1892V110.27C28.2941 110.27 27.5676 110.995 27.5676 111.892V131.966C13.1076 123.019 3.24324 107.011 3.24324 89.1892C3.24324 70.1124 15.8838 51.8124 34.6995 43.6492C35.5216 43.2924 35.8978 42.3373 35.5427 41.5168C35.1859 40.6962 34.2292 40.3168 33.4103 40.6735C13.4254 49.3427 0 68.8395 0 89.1892C0 118.197 24.5449 142.703 53.5962 142.703C83.0595 142.703 107.027 118.696 107.027 89.1892C107.027 68.8184 93.6016 49.3232 73.6168 40.6735ZM63.2432 113.514H76.2162V132.973C76.2162 133.255 76.307 133.505 76.4319 133.737C72.3146 135.91 67.8843 137.528 63.2432 138.477V113.514ZM74.5946 110.27H63.2432V90.8108H74.5946V110.27ZM56.7616 29.1892C56.867 44.6708 58.4822 53.1049 59.4324 56.7568H55.1351V29.1892H56.7616ZM50.2654 29.1892H51.8919V56.7568H47.5946C48.5465 53.1049 50.1584 44.6708 50.2654 29.1892ZM43.7838 60H45.4054H61.6216H63.2432V61.6216H43.7838V60ZM40.5405 64.8649H66.4865V69.7297H40.5405V64.8649ZM32.4324 90.8108H43.7838V110.27H32.4324V90.8108ZM30.8108 132.973V113.514H43.7838V138.451C39.1492 137.494 34.7287 135.869 30.6178 133.701C30.7314 133.481 30.8108 133.239 30.8108 132.973ZM51.8919 139.414V82.7027C51.8919 81.8059 51.1654 81.0811 50.2703 81.0811C49.3751 81.0811 48.6487 81.8059 48.6487 82.7027V139.203C48.1054 139.148 47.567 139.07 47.027 138.996V111.892V89.1892C47.027 88.2924 46.3005 87.5676 45.4054 87.5676H37.2973V72.973H69.7297V87.5676H61.6216C60.7249 87.5676 60 88.2924 60 89.1892V111.892V139.015C59.4616 139.088 58.9216 139.161 58.3784 139.215V82.7027C58.3784 81.8059 57.6535 81.0811 56.7568 81.0811C55.86 81.0811 55.1351 81.8059 55.1351 82.7027V139.419C54.6227 139.435 54.1119 139.459 53.5962 139.459C53.0254 139.459 52.4595 139.435 51.8919 139.414ZM71.3514 92.4324C72.2481 92.4324 72.973 93.1573 72.973 94.0541V107.027C72.973 107.924 72.2481 108.649 71.3514 108.649C70.4546 108.649 69.7297 107.924 69.7297 107.027V94.0541C69.7297 93.1573 70.4546 92.4324 71.3514 92.4324ZM68.1081 94.0541V107.027C68.1081 107.924 67.3832 108.649 66.4865 108.649C65.5897 108.649 64.8649 107.924 64.8649 107.027V94.0541C64.8649 93.1573 65.5897 92.4324 66.4865 92.4324C67.3832 92.4324 68.1081 93.1573 68.1081 94.0541ZM68.1081 116.757V132.973C68.1081 133.87 67.3832 134.595 66.4865 134.595C65.5897 134.595 64.8649 133.87 64.8649 132.973V116.757C64.8649 115.86 65.5897 115.135 66.4865 115.135C67.3832 115.135 68.1081 115.86 68.1081 116.757ZM72.973 116.757V131.351C72.973 132.248 72.2481 132.973 71.3514 132.973C70.4546 132.973 69.7297 132.248 69.7297 131.351V116.757C69.7297 115.86 70.4546 115.135 71.3514 115.135C72.2481 115.135 72.973 115.86 72.973 116.757ZM42.1622 82.7027V84.3243C42.1622 85.2211 41.4357 85.9459 40.5405 85.9459C39.6454 85.9459 38.9189 85.2211 38.9189 84.3243V82.7027C38.9189 81.8059 39.6454 81.0811 40.5405 81.0811C41.4357 81.0811 42.1622 81.8059 42.1622 82.7027ZM64.8649 84.3243V82.7027C64.8649 81.8059 65.5897 81.0811 66.4865 81.0811C67.3832 81.0811 68.1081 81.8059 68.1081 82.7027V84.3243C68.1081 85.2211 67.3832 85.9459 66.4865 85.9459C65.5897 85.9459 64.8649 85.2211 64.8649 84.3243ZM64.8649 77.8378V76.2162C64.8649 75.3195 65.5897 74.5946 66.4865 74.5946C67.3832 74.5946 68.1081 75.3195 68.1081 76.2162V77.8378C68.1081 78.7346 67.3832 79.4595 66.4865 79.4595C65.5897 79.4595 64.8649 78.7346 64.8649 77.8378ZM60 84.3243V82.7027C60 81.8059 60.7249 81.0811 61.6216 81.0811C62.5184 81.0811 63.2432 81.8059 63.2432 82.7027V84.3243C63.2432 85.2211 62.5184 85.9459 61.6216 85.9459C60.7249 85.9459 60 85.2211 60 84.3243ZM60 77.8378V76.2162C60 75.3195 60.7249 74.5946 61.6216 74.5946C62.5184 74.5946 63.2432 75.3195 63.2432 76.2162V77.8378C63.2432 78.7346 62.5184 79.4595 61.6216 79.4595C60.7249 79.4595 60 78.7346 60 77.8378ZM55.1351 77.8378V76.2162C55.1351 75.3195 55.86 74.5946 56.7568 74.5946C57.6535 74.5946 58.3784 75.3195 58.3784 76.2162V77.8378C58.3784 78.7346 57.6535 79.4595 56.7568 79.4595C55.86 79.4595 55.1351 78.7346 55.1351 77.8378ZM51.8919 76.2162V77.8378C51.8919 78.7346 51.1654 79.4595 50.2703 79.4595C49.3751 79.4595 48.6487 78.7346 48.6487 77.8378V76.2162C48.6487 75.3195 49.3751 74.5946 50.2703 74.5946C51.1654 74.5946 51.8919 75.3195 51.8919 76.2162ZM42.1622 76.2162V77.8378C42.1622 78.7346 41.4357 79.4595 40.5405 79.4595C39.6454 79.4595 38.9189 78.7346 38.9189 77.8378V76.2162C38.9189 75.3195 39.6454 74.5946 40.5405 74.5946C41.4357 74.5946 42.1622 75.3195 42.1622 76.2162ZM47.027 76.2162V77.8378C47.027 78.7346 46.3005 79.4595 45.4054 79.4595C44.5103 79.4595 43.7838 78.7346 43.7838 77.8378V76.2162C43.7838 75.3195 44.5103 74.5946 45.4054 74.5946C46.3005 74.5946 47.027 75.3195 47.027 76.2162ZM47.027 82.7027V84.3243C47.027 85.2211 46.3005 85.9459 45.4054 85.9459C44.5103 85.9459 43.7838 85.2211 43.7838 84.3243V82.7027C43.7838 81.8059 44.5103 81.0811 45.4054 81.0811C46.3005 81.0811 47.027 81.8059 47.027 82.7027ZM42.1622 116.757V132.973C42.1622 133.87 41.4357 134.595 40.5405 134.595C39.6454 134.595 38.9189 133.87 38.9189 132.973V116.757C38.9189 115.86 39.6454 115.135 40.5405 115.135C41.4357 115.135 42.1622 115.86 42.1622 116.757ZM37.2973 116.757V131.351C37.2973 132.248 36.5708 132.973 35.6757 132.973C34.7805 132.973 34.0541 132.248 34.0541 131.351V116.757C34.0541 115.86 34.7805 115.135 35.6757 115.135C36.5708 115.135 37.2973 115.86 37.2973 116.757ZM42.1622 94.0541V107.027C42.1622 107.924 41.4357 108.649 40.5405 108.649C39.6454 108.649 38.9189 107.924 38.9189 107.027V94.0541C38.9189 93.1573 39.6454 92.4324 40.5405 92.4324C41.4357 92.4324 42.1622 93.1573 42.1622 94.0541ZM37.2973 94.0541V107.027C37.2973 107.924 36.5708 108.649 35.6757 108.649C34.7805 108.649 34.0541 107.924 34.0541 107.027V94.0541C34.0541 93.1573 34.7805 92.4324 35.6757 92.4324C36.5708 92.4324 37.2973 93.1573 37.2973 94.0541Z"
      fill="#0A7AA3"
    />
    <path
      d="M147.908 113.854L148.058 111.458C140.72 110.959 134.879 107.914 130.536 102.323C126.393 97.1314 124.321 90.8667 124.321 83.5286C124.321 79.6848 124.945 76.3527 126.193 73.5324C127.441 70.7121 129.313 67.9791 131.809 65.3333C136.801 60.0918 143.041 57.4711 150.529 57.4711C155.071 57.4711 159.164 58.4445 162.809 60.3913C166.453 62.3381 169.423 65.0588 171.719 68.553L173.516 67.1303C171.02 63.3366 167.776 60.3662 163.782 58.2198C159.988 56.1732 155.695 55.1748 150.903 55.2248C146.86 55.2248 143.065 55.9112 139.521 57.2839C135.977 58.6567 132.857 60.7658 130.162 63.6111C127.466 66.5064 125.432 69.5014 124.059 72.5965C122.686 75.6916 122 79.3355 122 83.5287C122.05 91.4658 124.321 98.255 128.814 103.896C133.606 109.936 139.971 113.255 147.908 113.854ZM152.476 113.929C156.569 113.68 160.313 112.706 163.707 111.009C167.601 109.012 170.871 106.192 173.516 102.548L171.794 101.05C169.398 104.345 166.378 106.94 162.734 108.837C159.589 110.435 156.145 111.333 152.401 111.533L152.476 113.929ZM203.243 62.1134C203.243 62.4129 204.129 65.2708 205.901 70.687C207.673 76.1031 209.608 82.031 211.704 88.4705C213.801 94.91 216.621 103.421 220.165 114.004H223.385L203.542 55H202.943L183.25 114.004H186.32L203.243 62.1134ZM201.895 97.2312H199.2L203.692 114.004H206.388L201.895 97.2312ZM270.409 55L262.771 102.248L253.636 55H252.288L245.774 92.5139C245.774 92.6137 245.786 92.9632 245.811 93.5622C245.836 94.1612 245.886 94.8351 245.961 95.5839C246.036 96.3327 246.111 97.044 246.186 97.7179C246.26 98.3919 246.323 98.8037 246.373 98.9534C247.721 91.7651 248.806 85.9995 249.63 81.6566C250.454 77.3137 251.215 73.295 251.914 69.6012C252.613 65.9075 252.962 63.9854 252.962 63.8356C252.962 64.0353 253.461 66.7684 254.46 72.0348C255.458 77.3012 256.556 83.0418 257.754 89.2567C258.952 95.4716 260.55 103.721 262.546 114.004H262.996L272.805 55H270.409ZM235.366 55H233.119L242.928 114.004H243.303L244.426 109.886L235.366 55ZM282.539 55V114.004H284.486V55H282.539ZM320.427 114.004C328.714 114.004 335.777 111.084 341.618 105.243C344.513 102.398 346.697 99.3278 348.169 96.0332C349.642 92.7386 350.378 88.9947 350.378 84.8015C350.378 76.4653 347.458 69.4268 341.618 63.6859C335.777 57.9951 328.564 55.125 319.978 55.0749C314.687 55.1248 309.72 56.4477 305.077 59.0434C300.535 61.6891 296.915 65.3583 294.22 70.0505L296.391 71.2485C298.837 66.9056 302.157 63.5361 306.35 61.14C310.493 58.7439 315.036 57.5209 319.978 57.471C327.965 57.5209 334.604 60.1916 339.895 65.4829C345.187 70.6746 347.857 77.1137 347.907 84.8015C347.907 88.6453 347.233 92.077 345.886 95.0972C344.538 98.1174 342.566 100.95 339.97 103.596C334.629 108.937 328.115 111.608 320.427 111.608C315.635 111.608 311.292 110.584 307.398 108.538L306.275 110.709C310.518 112.906 315.236 114.004 320.427 114.004Z"
      fill="white"
    />
  </svg>
);