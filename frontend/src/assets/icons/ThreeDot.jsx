/* eslint-disable react/prop-types */
const ThreeDotIcon = ({ size, primary }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      zoomAndPan="magnify"
      viewBox="0 0 45 44.999999"
      height={size}
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <clipPath id="1b55cc8165">
          <path
            d="M 16 1 L 28.703125 1 L 28.703125 44 L 16 44 Z M 16 1 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#1b55cc8165)">
        <path
          fill={primary}
          d="M 26.402344 18.253906 C 26.820312 18.679688 27.167969 19.160156 27.449219 19.695312 C 27.726562 20.226562 27.925781 20.789062 28.042969 21.382812 C 28.160156 21.972656 28.191406 22.570312 28.136719 23.171875 C 28.078125 23.773438 27.941406 24.355469 27.71875 24.914062 C 27.492188 25.476562 27.195312 25.988281 26.824219 26.460938 C 26.453125 26.929688 26.023438 27.335938 25.535156 27.675781 C 25.042969 28.011719 24.519531 28.273438 23.953125 28.453125 C 23.390625 28.636719 22.8125 28.726562 22.222656 28.734375 C 21.429688 28.710938 20.667969 28.535156 19.945312 28.199219 C 19.21875 27.867188 18.585938 27.402344 18.042969 26.808594 C 17.480469 26.246094 17.050781 25.59375 16.746094 24.851562 C 16.441406 24.109375 16.289062 23.335938 16.285156 22.53125 C 16.289062 22.132812 16.328125 21.734375 16.402344 21.34375 C 16.480469 20.953125 16.59375 20.574219 16.742188 20.203125 C 16.894531 19.835938 17.074219 19.484375 17.292969 19.152344 C 17.507812 18.816406 17.753906 18.511719 18.027344 18.226562 C 18.304688 17.941406 18.601562 17.691406 18.925781 17.464844 C 19.25 17.242188 19.589844 17.054688 19.953125 16.898438 C 20.3125 16.742188 20.683594 16.625 21.0625 16.542969 C 21.445312 16.460938 21.832031 16.417969 22.222656 16.414062 C 23.011719 16.425781 23.765625 16.589844 24.492188 16.910156 C 25.214844 17.226562 25.851562 17.675781 26.402344 18.253906 Z M 22.222656 13.761719 C 22.621094 13.761719 23.011719 13.722656 23.402344 13.640625 C 23.789062 13.5625 24.167969 13.445312 24.53125 13.289062 C 24.898438 13.132812 25.246094 12.941406 25.574219 12.714844 C 25.902344 12.488281 26.207031 12.230469 26.488281 11.941406 C 26.765625 11.652344 27.015625 11.339844 27.234375 11 C 27.449219 10.660156 27.632812 10.304688 27.78125 9.925781 C 27.933594 9.550781 28.042969 9.164062 28.117188 8.765625 C 28.191406 8.367188 28.226562 7.964844 28.222656 7.558594 C 28.21875 7.15625 28.179688 6.757812 28.097656 6.367188 C 28.019531 5.972656 27.90625 5.589844 27.753906 5.21875 C 27.601562 4.847656 27.417969 4.496094 27.195312 4.164062 C 26.976562 3.828125 26.730469 3.519531 26.449219 3.238281 C 26.171875 2.953125 25.871094 2.699219 25.542969 2.476562 C 25.21875 2.253906 24.871094 2.066406 24.511719 1.910156 C 24.148438 1.757812 23.773438 1.640625 23.390625 1.5625 C 23.003906 1.484375 22.617188 1.441406 22.222656 1.441406 C 21.828125 1.441406 21.4375 1.480469 21.050781 1.558594 C 20.667969 1.636719 20.292969 1.753906 19.925781 1.910156 C 19.5625 2.0625 19.21875 2.25 18.890625 2.476562 C 18.5625 2.699219 18.257812 2.953125 17.980469 3.238281 C 17.703125 3.523438 17.453125 3.835938 17.234375 4.167969 C 17.015625 4.503906 16.832031 4.859375 16.679688 5.230469 C 16.53125 5.601562 16.417969 5.988281 16.339844 6.382812 C 16.261719 6.777344 16.222656 7.175781 16.222656 7.578125 C 16.222656 7.984375 16.261719 8.382812 16.339844 8.777344 C 16.417969 9.171875 16.53125 9.558594 16.679688 9.929688 C 16.832031 10.300781 17.015625 10.65625 17.234375 10.992188 C 17.453125 11.324219 17.703125 11.636719 17.980469 11.921875 C 18.257812 12.207031 18.5625 12.460938 18.890625 12.683594 C 19.21875 12.90625 19.5625 13.097656 19.925781 13.25 C 20.292969 13.40625 20.667969 13.523438 21.050781 13.601562 C 21.4375 13.679688 21.828125 13.71875 22.222656 13.71875 Z M 22.222656 31.386719 C 21.828125 31.386719 21.4375 31.425781 21.050781 31.503906 C 20.667969 31.582031 20.292969 31.699219 19.925781 31.855469 C 19.5625 32.007812 19.21875 32.195312 18.890625 32.421875 C 18.5625 32.644531 18.257812 32.898438 17.980469 33.183594 C 17.703125 33.46875 17.453125 33.78125 17.234375 34.113281 C 17.015625 34.449219 16.832031 34.804688 16.679688 35.175781 C 16.53125 35.546875 16.417969 35.933594 16.339844 36.328125 C 16.261719 36.722656 16.222656 37.121094 16.222656 37.523438 C 16.222656 37.929688 16.261719 38.328125 16.339844 38.722656 C 16.417969 39.117188 16.53125 39.503906 16.679688 39.875 C 16.832031 40.246094 17.015625 40.601562 17.234375 40.9375 C 17.453125 41.269531 17.703125 41.582031 17.980469 41.867188 C 18.257812 42.152344 18.5625 42.40625 18.890625 42.628906 C 19.21875 42.855469 19.5625 43.042969 19.925781 43.195312 C 20.292969 43.351562 20.667969 43.46875 21.050781 43.546875 C 21.4375 43.625 21.828125 43.664062 22.222656 43.664062 C 23.015625 43.648438 23.773438 43.476562 24.496094 43.148438 C 25.21875 42.824219 25.855469 42.367188 26.402344 41.78125 C 26.964844 41.21875 27.402344 40.566406 27.710938 39.824219 C 28.019531 39.082031 28.175781 38.308594 28.179688 37.503906 C 28.179688 37.101562 28.144531 36.703125 28.070312 36.308594 C 27.992188 35.914062 27.882812 35.53125 27.734375 35.15625 C 27.585938 34.785156 27.402344 34.433594 27.183594 34.097656 C 26.96875 33.761719 26.722656 33.449219 26.445312 33.164062 C 26.167969 32.878906 25.867188 32.621094 25.542969 32.398438 C 25.214844 32.171875 24.871094 31.980469 24.511719 31.824219 C 24.148438 31.667969 23.773438 31.550781 23.390625 31.46875 C 23.003906 31.386719 22.617188 31.347656 22.222656 31.34375 Z M 22.222656 31.386719 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default ThreeDotIcon;