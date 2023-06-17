import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface Props {
  className?: string;
  strokeWidth: number;
  strokeColor: string;
  height: number;
}

function Vietnam({ className, height, strokeWidth, strokeColor }: Props) {
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  const islandsTransition = { duration: 2, yoyo: Infinity, ease: "easeInOut" };
  const [inView, setInview] = useState(false);

  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        if (!inView) return;
        setInview(inView);
      }}
      root={null}
      rootMargin="0px"
      threshold={0.8}
    >
      <div className={className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          height={height}
          viewBox="0 0 798 897"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0,897) scale(0.1,-0.1)"
            fill="#000000"
            stroke="none"
          >
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={transition}
              d="M1711 8944 c-17 -14 -41 -43 -53 -65 -16 -29 -39 -49 -81 -71 -59 -32 -99 -71 -129 -127 -17 -31 -19 -32 -40 -17 -41 29 -78 20 -124 -29 -23 -25 -46 -45 -52 -45 -6 0 -32 11 -58 25 -91 48 -127 29 -144 -77 -7 -40 -18 -83 -26 -96 -14 -21 -16 -21 -43 -7 -27 14 -53 48 -92 120 -23 42 -75 47 -109 10 -30 -32 -36 -32 -44 7 -13 64 -63 86 -125 54 -36 -19 -54 -48 -75 -119 -9 -32 -24 -61 -32 -64 -9 -3 -40 2 -70 11 -43 14 -63 28 -109 81 -92 104 -157 100 -192 -12 -16 -50 -24 -61 -67 -87 l-48 -31 6 -68 c3 -37 13 -85 21 -105 16 -36 155 -182 174 -182 6 0 13 -12 17 -27 13 -62 26 -92 49 -117 21 -22 32 -26 85 -26 58 0 60 -1 60 -27 0 -15 -10 -37 -22 -50 -19 -21 -20 -26 -9 -63 8 -28 9 -46 1 -59 -20 -38 -11 -68 35 -122 25 -29 54 -72 66 -95 11 -23 27 -48 35 -55 17 -14 294 -78 340 -79 44 0 57 20 52 80 -5 48 -4 50 21 50 55 0 199 -32 237 -53 56 -32 66 -58 51 -140 -13 -81 -8 -94 51 -122 30 -14 45 -28 53 -52 8 -26 26 -42 97 -81 120 -68 136 -109 59 -148 -18 -10 -64 -48 -104 -87 l-72 -70 -53 23 c-34 15 -81 24 -133 27 -71 5 -83 3 -107 -17 -22 -17 -28 -30 -28 -61 0 -29 -6 -45 -25 -61 -20 -17 -25 -31 -25 -65 0 -85 25 -110 193 -192 88 -43 112 -60 136 -95 59 -85 133 -126 229 -126 67 0 70 -1 80 -27 16 -42 39 -121 57 -193 22 -89 50 -145 80 -158 30 -14 48 -8 98 31 21 16 39 28 41 26 2 -2 16 -35 31 -74 33 -85 127 -274 157 -319 48 -70 174 -195 203 -202 40 -9 53 -20 60 -53 7 -33 45 -75 86 -96 34 -18 49 -50 49 -104 0 -21 7 -58 15 -81 8 -23 15 -57 15 -76 0 -45 29 -64 98 -64 46 0 57 -4 75 -27 46 -56 89 -90 179 -139 51 -28 93 -57 93 -64 0 -7 -20 -19 -44 -26 -48 -14 -91 -49 -91 -74 0 -9 13 -34 29 -56 16 -21 31 -50 32 -64 3 -18 22 -36 65 -65 80 -52 184 -134 184 -145 0 -4 -25 -45 -56 -91 -51 -77 -55 -87 -48 -124 3 -22 7 -71 7 -110 0 -74 -14 -115 -52 -149 -18 -16 -21 -31 -21 -92 0 -115 24 -218 76 -321 38 -76 47 -105 52 -162 3 -42 10 -75 18 -82 19 -16 18 -30 -11 -81 -37 -67 -67 -174 -59 -211 3 -18 22 -63 41 -101 53 -106 48 -146 -24 -190 -29 -17 -76 -33 -120 -41 -79 -14 -120 -35 -173 -89 -32 -34 -37 -36 -80 -30 -44 6 -48 4 -80 -30 -23 -24 -52 -41 -87 -51 -57 -17 -69 -31 -79 -94 -4 -22 -9 -41 -13 -41 -3 0 -28 11 -55 25 -27 14 -66 25 -86 25 -63 0 -137 -28 -180 -69 -45 -43 -51 -73 -25 -136 9 -20 19 -67 22 -103 6 -65 7 -68 63 -122 61 -59 96 -107 87 -117 -17 -17 -63 -3 -87 26 -21 24 -34 31 -62 31 -53 0 -193 -28 -254 -51 l-54 -21 -31 26 c-40 34 -116 37 -144 6 -17 -19 -18 -26 -7 -66 15 -54 10 -64 -56 -126 -34 -32 -62 -49 -88 -54 -22 -4 -67 -18 -101 -31 -97 -39 -102 -76 -28 -246 l38 -87 71 -21 c89 -27 162 -63 175 -88 8 -15 -2 -36 -55 -112 -123 -176 -144 -248 -107 -366 l17 -54 -41 -82 c-52 -103 -61 -142 -37 -168 22 -24 31 -24 170 2 129 25 147 37 191 124 43 85 60 103 121 125 34 13 83 43 122 76 65 55 93 67 267 113 55 15 73 34 73 80 0 48 18 65 54 51 15 -5 54 -10 87 -10 135 0 177 77 92 171 l-35 39 23 47 c12 27 37 67 55 90 48 58 56 87 43 135 -6 22 -7 44 -2 48 11 10 91 40 106 40 7 0 24 -20 39 -45 38 -62 64 -61 127 4 44 45 51 49 111 56 85 10 113 22 186 84 36 29 92 63 132 79 38 16 92 47 119 70 26 23 68 48 92 57 24 8 67 37 97 65 35 31 68 52 90 56 28 5 39 14 50 39 10 25 23 36 51 45 62 19 141 72 152 99 6 14 15 46 21 71 7 25 21 59 31 77 13 20 18 40 14 56 -5 20 -2 27 15 32 44 14 46 57 13 213 -9 42 -12 77 -7 82 5 5 23 10 39 12 32 3 35 16 24 93 -4 27 -1 31 36 43 58 18 78 46 71 97 -4 26 -1 57 9 85 19 55 13 75 -34 105 -37 23 -71 79 -87 140 -5 20 -2 30 15 41 29 21 26 52 -9 108 -42 66 -47 97 -21 139 l21 35 -36 118 c-19 66 -42 139 -50 164 -9 25 -22 73 -29 107 -8 34 -30 111 -50 171 -19 60 -35 115 -35 123 0 8 -9 33 -20 54 -12 22 -27 75 -35 118 -16 89 -32 120 -80 148 -18 11 -43 34 -55 52 -12 18 -44 49 -70 69 -36 28 -49 47 -54 74 -5 21 -23 53 -48 80 -37 40 -39 46 -33 84 6 38 5 41 -26 57 -17 10 -51 36 -74 58 -45 44 -98 65 -161 65 -35 0 -42 4 -59 37 -31 58 -52 80 -113 120 -31 21 -121 100 -201 175 -89 84 -166 148 -201 167 -81 43 -133 105 -193 228 -46 96 -52 115 -55 182 -4 111 -6 114 -64 146 -80 43 -249 206 -344 332 l-85 111 30 44 c19 27 44 89 65 164 32 113 123 335 147 359 5 5 31 15 56 20 40 8 53 18 87 63 23 29 70 77 106 105 73 59 88 90 90 177 0 40 7 66 25 95 14 22 25 47 25 55 0 8 4 21 9 29 8 12 16 9 46 -17 19 -18 40 -32 44 -32 21 0 53 38 60 70 5 24 13 36 26 38 52 8 68 15 104 47 21 20 44 50 51 68 18 44 49 76 90 93 19 8 55 35 80 59 38 37 56 46 110 58 74 15 110 32 110 50 0 11 -45 72 -105 141 -24 27 -29 28 -79 22 -29 -3 -72 -13 -96 -21 -23 -8 -51 -15 -61 -15 -20 0 -93 42 -104 60 -3 6 -24 19 -46 31 -22 11 -44 30 -49 43 -11 30 -57 63 -129 92 -42 18 -55 28 -53 41 16 84 18 80 -37 113 -28 18 -51 38 -51 47 0 22 19 53 34 53 21 0 45 33 66 94 10 31 28 68 39 82 33 42 26 48 -102 98 -78 30 -92 31 -131 11 -39 -20 -41 -20 -64 20 -29 48 -62 54 -112 21 -40 -27 -60 -32 -60 -18 0 5 -16 27 -36 50 -33 39 -39 42 -85 42 -42 0 -54 5 -76 28 -14 15 -33 45 -43 67 -22 50 -44 70 -95 84 -60 16 -80 14 -114 -15z m126 -55 c8 -7 23 -32 34 -54 11 -23 35 -57 54 -75 28 -28 44 -34 90 -38 52 -4 56 -7 82 -48 40 -63 64 -71 124 -39 27 14 50 25 52 25 1 0 11 -16 21 -35 24 -43 51 -51 101 -31 49 21 68 20 116 -4 34 -18 39 -24 33 -43 -4 -12 -11 -38 -15 -57 -4 -19 -12 -36 -16 -37 -42 -15 -58 -33 -75 -83 -26 -77 -21 -113 17 -120 17 -4 39 -13 51 -20 20 -12 20 -15 6 -51 -22 -56 -10 -87 36 -94 62 -9 139 -53 153 -86 6 -17 28 -39 48 -50 20 -10 63 -39 96 -63 70 -52 105 -57 205 -26 36 11 72 20 81 20 16 0 81 -85 72 -94 -4 -3 -17 -6 -30 -6 -38 0 -88 -25 -135 -67 -24 -22 -57 -45 -74 -52 -43 -17 -91 -69 -107 -116 -10 -28 -24 -46 -50 -60 -34 -19 -38 -19 -81 -3 -36 13 -48 14 -61 4 -18 -13 -18 -57 0 -101 7 -18 5 -17 -18 4 -16 15 -39 24 -57 24 -36 0 -80 -37 -80 -67 0 -12 -10 -37 -22 -56 -15 -25 -23 -60 -29 -125 -7 -83 -10 -92 -35 -110 -89 -65 -111 -84 -131 -115 -38 -60 -51 -70 -91 -70 -50 0 -70 -22 -122 -135 -55 -119 -77 -177 -110 -295 -18 -67 -37 -111 -58 -138 -49 -61 -44 -82 37 -187 26 -33 56 -76 68 -95 30 -48 234 -238 297 -276 l51 -30 5 -86 c5 -78 10 -94 62 -201 67 -137 120 -199 211 -247 42 -23 105 -75 193 -160 72 -70 158 -146 191 -168 58 -39 113 -94 113 -112 0 -5 14 -26 32 -45 30 -35 33 -36 79 -30 57 8 76 -1 140 -65 37 -37 46 -52 42 -72 -4 -19 6 -36 45 -78 33 -36 54 -69 61 -96 7 -27 22 -51 41 -66 17 -13 42 -32 56 -43 14 -11 29 -36 33 -55 6 -30 12 -36 46 -46 53 -14 75 -47 81 -120 3 -32 16 -81 29 -109 13 -27 27 -68 33 -90 11 -48 78 -278 93 -320 6 -16 19 -61 28 -100 10 -38 26 -96 36 -127 16 -51 17 -63 5 -112 -8 -33 -10 -70 -5 -93 4 -21 8 -69 9 -108 4 -112 74 -274 126 -290 27 -8 25 -34 -4 -70 -20 -25 -30 -29 -61 -26 -75 6 -110 -73 -65 -146 l19 -32 -22 -7 c-12 -4 -25 -12 -29 -18 -12 -18 -8 -116 7 -186 21 -95 19 -115 -10 -128 -22 -10 -25 -18 -25 -69 -1 -35 -6 -66 -15 -77 -8 -11 -20 -46 -26 -78 -11 -54 -15 -61 -53 -83 -22 -13 -63 -30 -90 -37 -38 -10 -54 -20 -69 -46 -11 -18 -33 -40 -51 -48 -17 -9 -52 -34 -78 -55 -26 -22 -68 -48 -93 -59 -26 -11 -72 -40 -103 -63 -32 -24 -88 -56 -125 -72 -42 -17 -85 -45 -114 -72 -53 -52 -86 -68 -163 -78 -67 -9 -121 -35 -144 -69 -19 -30 -36 -34 -36 -8 0 67 -83 82 -186 33 -34 -16 -64 -35 -66 -43 -3 -7 -3 -38 -1 -68 5 -51 2 -58 -30 -100 -19 -25 -43 -63 -54 -85 -12 -22 -30 -49 -42 -59 -32 -29 -26 -52 27 -91 61 -47 70 -64 46 -82 -19 -14 -49 -14 -164 2 -40 6 -48 4 -68 -18 -13 -14 -26 -43 -29 -66 -3 -23 -10 -44 -15 -47 -5 -3 -38 -12 -73 -19 -92 -20 -160 -52 -232 -111 -42 -35 -83 -58 -118 -69 -60 -17 -87 -44 -136 -135 -17 -32 -39 -66 -50 -76 -13 -12 -170 -53 -208 -54 -11 0 13 69 39 108 38 58 47 117 26 178 -33 96 -22 131 84 289 75 110 93 162 71 203 -15 28 -77 63 -172 97 l-77 27 -41 87 c-22 47 -41 92 -41 98 0 16 65 49 126 64 68 17 121 45 135 72 6 12 29 39 51 59 26 25 38 43 35 55 -18 63 -18 83 -2 83 10 0 30 -11 47 -25 37 -31 50 -31 141 0 40 13 106 29 145 35 l73 12 35 -31 c31 -28 41 -31 102 -31 73 0 92 10 92 47 0 38 -28 84 -96 155 -57 59 -64 70 -64 107 0 23 -9 68 -21 101 -25 72 -20 81 56 116 65 31 87 30 163 -6 72 -34 110 -38 119 -13 4 9 11 42 18 72 10 53 13 56 45 62 42 7 69 20 94 48 15 17 26 20 58 14 36 -5 43 -2 81 35 68 65 115 92 161 92 54 0 173 57 209 99 45 54 41 124 -15 235 l-40 79 21 63 c11 35 36 94 56 132 42 83 46 128 11 141 -19 8 -24 19 -29 61 -6 48 -29 106 -77 191 -23 41 -50 168 -50 239 0 37 6 55 30 85 16 21 30 38 30 39 0 0 7 37 15 81 14 73 14 84 -1 133 -17 53 -17 53 8 80 62 69 95 142 84 186 -6 24 -99 103 -199 169 -27 18 -46 40 -54 62 -7 20 -19 45 -28 58 -15 22 -15 22 36 37 68 20 96 55 83 102 -8 29 -21 39 -108 83 -110 56 -166 98 -166 123 0 10 -7 28 -16 41 -16 22 -22 23 -85 19 -63 -5 -69 -4 -69 14 0 10 -7 35 -15 54 -8 19 -21 73 -29 119 -17 99 -28 117 -77 139 -36 16 -43 27 -65 101 -8 25 -17 32 -53 41 -25 6 -53 21 -65 35 -12 14 -38 38 -59 54 -64 48 -161 210 -221 368 -34 91 -74 167 -92 174 -10 4 -32 -11 -63 -41 -26 -25 -52 -46 -59 -46 -6 0 -25 46 -42 103 -88 293 -78 277 -177 277 -96 0 -129 16 -199 95 -45 52 -74 73 -165 120 -60 32 -121 67 -134 77 -28 22 -34 68 -10 68 27 0 48 47 42 97 l-5 46 72 -6 c46 -3 91 -15 128 -32 35 -16 66 -24 78 -20 11 3 41 31 68 62 26 30 75 73 110 96 89 57 111 107 75 168 -18 30 -51 55 -136 103 -35 20 -49 35 -54 56 -7 35 -18 46 -69 64 -32 11 -39 18 -37 37 9 103 7 147 -10 173 -39 60 -159 104 -307 113 -116 7 -126 0 -117 -77 4 -32 2 -50 -4 -50 -6 0 -45 9 -87 19 -43 11 -103 25 -135 31 -56 11 -59 14 -77 56 -11 24 -40 64 -66 88 -44 41 -47 45 -37 72 15 38 27 149 28 247 0 67 -3 81 -19 93 -32 23 -52 16 -80 -27 -26 -38 -29 -40 -49 -26 -15 9 -27 35 -37 77 -14 56 -21 68 -58 94 -23 17 -50 41 -58 54 -9 13 -27 27 -40 33 -32 11 -54 65 -54 127 0 45 3 50 37 73 29 18 43 38 61 87 13 34 28 62 33 62 11 0 33 -23 73 -75 34 -44 112 -83 184 -92 44 -5 53 -3 75 19 14 14 32 49 40 79 18 60 42 99 60 99 7 0 24 -27 39 -60 31 -72 54 -77 106 -27 19 17 36 27 39 21 10 -29 67 -94 103 -119 53 -36 96 -37 126 -2 21 25 44 103 44 152 0 36 14 38 69 10 74 -37 106 -34 153 17 l38 42 39 -22 39 -22 32 26 c17 15 39 43 49 63 23 44 53 72 106 99 45 23 81 59 115 116 21 35 26 38 57 33 19 -4 42 -12 50 -18z m2307 -6366 c7 -18 -14 -37 -27 -24 -9 9 1 41 13 41 4 0 11 -8 14 -17z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={transition}
              d="M1735 8369 c-4 -5 -28 -74 -54 -152 l-48 -142 -64 -6 c-35 -4 -104 -7 -154 -8 -104 -1 -135 -8 -135 -27 0 -8 46 -49 102 -91 56 -43 117 -91 135 -108 l32 -30 -44 -140 c-46 -143 -52 -179 -35 -190 5 -3 73 37 150 90 83 56 146 93 153 88 7 -4 65 -44 131 -90 65 -46 127 -83 137 -83 29 0 24 45 -21 184 -22 67 -40 131 -40 142 0 13 40 49 125 111 103 76 125 97 125 118 l0 25 -169 0 -168 0 -48 138 c-26 75 -54 147 -61 160 -15 23 -38 29 -49 11z m139 -360 c17 -1 77 -4 133 -8 l103 -6 -100 -73 c-117 -85 -115 -79 -70 -220 17 -52 29 -97 26 -99 -2 -2 -47 25 -99 61 -52 36 -100 66 -107 66 -7 0 -51 -27 -98 -61 -47 -33 -91 -63 -98 -66 -10 -3 -8 15 8 69 11 40 24 83 29 96 24 62 15 78 -88 154 l-98 73 124 6 c104 5 126 9 137 24 7 10 28 61 45 114 17 53 34 101 38 106 3 6 23 -45 44 -112 39 -122 39 -123 71 -124z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M5331 6449 c-14 -5 -37 -7 -53 -4 -21 5 -28 3 -28 -8 0 -26 27 -38 76 -35 51 3 62 14 42 40 -10 12 -19 14 -37 7z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M5750 6375 c0 -19 9 -31 31 -43 66 -36 81 -53 75 -83 -5 -26 -3 -29 19 -29 30 0 58 52 49 93 -9 42 -76 87 -131 87 -39 0 -43 -2 -43 -25z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M6020 6227 c-30 -15 -35 -60 -7 -65 38 -7 62 7 73 43 11 34 10 35 -15 35 -14 0 -37 -6 -51 -13z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M5420 6043 c-37 -7 -73 -40 -87 -81 -7 -20 -13 -41 -13 -46 0 -13 92 0 133 20 34 16 37 21 37 60 0 39 -14 58 -38 53 -4 -1 -18 -4 -32 -6z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M5635 5950 c-4 -6 -4 -24 0 -40 5 -24 12 -30 33 -30 49 0 73 37 43 64 -20 18 -66 21 -76 6z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M5440 5840 c-6 -11 -20 -20 -30 -20 -11 0 -20 -6 -20 -14 0 -8 -3 -21 -6 -30 -5 -13 2 -16 40 -16 26 0 60 7 76 15 25 13 30 22 30 50 0 34 -1 35 -40 35 -29 0 -42 -5 -50 -20z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M6070 5830 c0 -14 -7 -20 -23 -20 -32 0 -61 -32 -45 -48 17 -17 68 -15 74 3 4 9 19 15 40 15 23 0 37 6 44 19 18 34 2 51 -46 51 -37 0 -44 -3 -44 -20z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M5600 5743 c-8 -3 -25 -18 -38 -34 -22 -26 -22 -30 -6 -36 9 -3 29 0 43 8 40 23 41 72 1 62z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M5123 5470 c-26 -10 -32 -54 -10 -63 20 -8 65 3 78 19 9 11 8 19 -6 34 -20 22 -29 23 -62 10z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M7410 1704 c-29 -50 -25 -108 9 -112 28 -4 81 42 81 71 0 21 -18 59 -34 69 -21 14 -34 8 -56 -28z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M7259 1675 c-31 -17 -59 -57 -59 -85 0 -16 6 -20 30 -20 42 0 80 42 80 86 0 37 -10 41 -51 19z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M7538 1534 c-16 -9 -28 -22 -28 -30 0 -18 -71 -94 -87 -94 -7 0 -13 -4 -13 -10 0 -5 -5 -10 -11 -10 -23 0 -88 -61 -82 -77 12 -31 128 5 220 70 44 30 79 101 67 136 -11 31 -29 34 -66 15z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M7120 1394 l0 -37 39 6 c21 2 51 13 66 23 25 17 26 19 9 31 -10 7 -39 13 -66 13 l-48 0 0 -36z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M7323 1187 c-4 -8 -27 -26 -50 -42 -44 -28 -54 -54 -31 -79 20 -21 89 -8 111 21 10 13 25 29 32 37 8 7 15 26 17 42 3 27 0 29 -34 32 -23 2 -39 -2 -45 -11z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M7901 1167 c-20 -20 -12 -37 18 -37 24 0 41 14 41 35 0 9 -51 10 -59 2z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M7340 930 c-14 -4 -40 -8 -58 -9 -25 -1 -37 -8 -52 -33 -26 -43 -23 -94 5 -90 25 5 155 89 155 101 0 5 3 16 6 25 7 18 -13 20 -56 6z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M6785 869 c-5 -5 -29 -23 -52 -39 -44 -31 -56 -60 -26 -60 23 0 80 40 94 68 14 24 2 47 -16 31z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M7821 766 c-14 -17 -2 -77 17 -84 6 -2 19 13 29 33 17 36 17 37 -2 51 -24 18 -30 18 -44 0z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M6734 561 c-67 -17 -74 -41 -11 -41 47 0 84 20 73 38 -8 13 -16 13 -62 3z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M6340 523 c-23 -30 -22 -46 4 -51 53 -11 90 26 60 59 -23 26 -39 24 -64 -8z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M6578 476 c-36 -16 -23 -33 30 -42 42 -7 42 -6 42 25 0 26 -4 31 -22 30 -13 0 -35 -6 -50 -13z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M6162 378 c-7 -7 -12 -18 -12 -25 0 -18 35 -16 51 3 10 13 10 17 -2 25 -19 12 -23 11 -37 -3z"
            />
            <motion.path
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }} // -> this works on Chrome (https://stackoverflow.com/a/72860664/19106660)
              whileInView={{ pathLength: 1 }} // -> for some reason this doesn't work on Chrome
              transition={islandsTransition}
              d="M5982 369 c-37 -14 -21 -34 29 -34 38 0 44 3 47 23 3 18 -1 22 -25 21 -15 0 -39 -4 -51 -10z"
            />
          </g>
        </svg>
      </div>
    </InView>
  );
}

export default Vietnam;
