/* eslint-disable react/prop-types */
const LogoutIcon = ({ size,primary }) => {
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
        <clipPath id="07a43a294f">
          <path
            d="M 1.890625 4.5 L 29 4.5 L 29 41.25 L 1.890625 41.25 Z M 1.890625 4.5 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a4c59345be">
          <path
            d="M 10 14 L 43.140625 14 L 43.140625 32 L 10 32 Z M 10 14 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#07a43a294f)">
        <path
          fill={primary}
          d="M 22.515625 41.25 L 8.078125 41.25 C 7.671875 41.25 7.269531 41.210938 6.871094 41.132812 C 6.472656 41.050781 6.085938 40.9375 5.710938 40.78125 C 5.335938 40.628906 4.980469 40.4375 4.640625 40.214844 C 4.304688 39.992188 3.992188 39.738281 3.707031 39.453125 C 3.417969 39.171875 3.160156 38.859375 2.9375 38.527344 C 2.710938 38.191406 2.519531 37.839844 2.363281 37.46875 C 2.207031 37.097656 2.089844 36.714844 2.011719 36.320312 C 1.933594 35.925781 1.890625 35.527344 1.890625 35.125 L 1.890625 10.625 C 1.890625 10.222656 1.933594 9.824219 2.011719 9.429688 C 2.089844 9.035156 2.207031 8.652344 2.363281 8.28125 C 2.519531 7.910156 2.710938 7.558594 2.9375 7.222656 C 3.160156 6.890625 3.417969 6.578125 3.707031 6.296875 C 3.992188 6.011719 4.304688 5.757812 4.640625 5.535156 C 4.980469 5.3125 5.335938 5.121094 5.710938 4.96875 C 6.085938 4.8125 6.472656 4.699219 6.871094 4.617188 C 7.269531 4.539062 7.671875 4.5 8.078125 4.5 L 22.515625 4.5 C 22.921875 4.5 23.324219 4.539062 23.722656 4.617188 C 24.121094 4.699219 24.507812 4.8125 24.882812 4.96875 C 25.257812 5.121094 25.613281 5.3125 25.949219 5.535156 C 26.289062 5.757812 26.601562 6.011719 26.886719 6.296875 C 27.175781 6.578125 27.429688 6.890625 27.65625 7.222656 C 27.882812 7.558594 28.074219 7.910156 28.230469 8.28125 C 28.382812 8.652344 28.503906 9.035156 28.582031 9.429688 C 28.660156 9.824219 28.699219 10.222656 28.703125 10.625 L 28.703125 14.707031 C 28.703125 14.980469 28.648438 15.238281 28.542969 15.488281 C 28.441406 15.738281 28.289062 15.960938 28.097656 16.152344 C 27.902344 16.34375 27.679688 16.492188 27.429688 16.59375 C 27.175781 16.699219 26.914062 16.75 26.640625 16.75 C 26.367188 16.75 26.101562 16.699219 25.851562 16.59375 C 25.597656 16.492188 25.375 16.34375 25.179688 16.152344 C 24.988281 15.960938 24.839844 15.738281 24.734375 15.488281 C 24.628906 15.238281 24.578125 14.980469 24.578125 14.707031 L 24.578125 10.625 C 24.578125 10.355469 24.523438 10.09375 24.417969 9.84375 C 24.316406 9.59375 24.167969 9.371094 23.972656 9.179688 C 23.78125 8.988281 23.554688 8.84375 23.304688 8.738281 C 23.050781 8.636719 22.789062 8.582031 22.515625 8.582031 L 8.078125 8.582031 C 7.804688 8.582031 7.542969 8.636719 7.289062 8.738281 C 7.035156 8.84375 6.8125 8.988281 6.621094 9.179688 C 6.425781 9.371094 6.277344 9.59375 6.171875 9.84375 C 6.070312 10.09375 6.015625 10.355469 6.015625 10.625 L 6.015625 35.125 C 6.015625 35.394531 6.070312 35.65625 6.171875 35.90625 C 6.277344 36.15625 6.425781 36.378906 6.621094 36.570312 C 6.8125 36.761719 7.035156 36.90625 7.289062 37.011719 C 7.542969 37.113281 7.804688 37.167969 8.078125 37.167969 L 22.515625 37.167969 C 22.789062 37.167969 23.050781 37.113281 23.304688 37.011719 C 23.554688 36.90625 23.78125 36.761719 23.972656 36.570312 C 24.167969 36.378906 24.316406 36.15625 24.417969 35.90625 C 24.523438 35.65625 24.578125 35.394531 24.578125 35.125 L 24.578125 31.042969 C 24.578125 30.769531 24.628906 30.511719 24.734375 30.261719 C 24.839844 30.011719 24.988281 29.789062 25.179688 29.597656 C 25.375 29.40625 25.597656 29.257812 25.851562 29.15625 C 26.101562 29.050781 26.367188 29 26.640625 29 C 26.914062 29 27.175781 29.050781 27.429688 29.15625 C 27.679688 29.257812 27.902344 29.40625 28.097656 29.597656 C 28.289062 29.789062 28.441406 30.011719 28.542969 30.261719 C 28.648438 30.511719 28.703125 30.769531 28.703125 31.042969 L 28.703125 35.125 C 28.699219 35.527344 28.660156 35.925781 28.582031 36.320312 C 28.503906 36.714844 28.382812 37.097656 28.230469 37.46875 C 28.074219 37.839844 27.882812 38.191406 27.65625 38.527344 C 27.429688 38.859375 27.175781 39.171875 26.886719 39.453125 C 26.601562 39.738281 26.289062 39.992188 25.949219 40.214844 C 25.613281 40.4375 25.257812 40.628906 24.882812 40.78125 C 24.507812 40.9375 24.121094 41.050781 23.722656 41.132812 C 23.324219 41.210938 22.921875 41.25 22.515625 41.25 Z M 22.515625 41.25 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#a4c59345be)">
        <path
          fill={primary}
          d="M 34.886719 31.042969 C 34.472656 31.042969 34.089844 30.925781 33.742188 30.699219 C 33.394531 30.46875 33.144531 30.164062 32.984375 29.78125 C 32.824219 29.398438 32.785156 29.007812 32.867188 28.601562 C 32.949219 28.195312 33.136719 27.847656 33.429688 27.554688 L 36.097656 24.917969 L 12.203125 24.917969 C 11.929688 24.917969 11.667969 24.863281 11.414062 24.761719 C 11.160156 24.65625 10.9375 24.511719 10.746094 24.320312 C 10.550781 24.128906 10.402344 23.90625 10.296875 23.65625 C 10.191406 23.40625 10.140625 23.144531 10.140625 22.875 C 10.140625 22.605469 10.191406 22.34375 10.296875 22.09375 C 10.402344 21.84375 10.550781 21.621094 10.746094 21.429688 C 10.9375 21.238281 11.160156 21.09375 11.414062 20.988281 C 11.667969 20.886719 11.929688 20.832031 12.203125 20.832031 L 36.097656 20.832031 L 33.429688 18.195312 C 33.242188 18 33.097656 17.78125 33 17.53125 C 32.898438 17.28125 32.847656 17.023438 32.851562 16.757812 C 32.855469 16.488281 32.90625 16.234375 33.011719 15.984375 C 33.117188 15.738281 33.265625 15.519531 33.457031 15.332031 C 33.648438 15.140625 33.867188 14.996094 34.117188 14.890625 C 34.367188 14.789062 34.625 14.734375 34.894531 14.734375 C 35.167969 14.730469 35.425781 14.78125 35.679688 14.878906 C 35.929688 14.976562 36.152344 15.121094 36.347656 15.304688 L 42.535156 21.429688 C 42.898438 21.789062 43.101562 22.222656 43.136719 22.730469 C 43.148438 22.867188 43.144531 23.003906 43.125 23.140625 C 43.074219 23.542969 42.914062 23.894531 42.648438 24.203125 C 42.609375 24.246094 42.566406 24.289062 42.527344 24.328125 L 36.351562 30.441406 C 35.949219 30.84375 35.460938 31.042969 34.886719 31.042969 Z M 34.886719 31.042969 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default LogoutIcon;