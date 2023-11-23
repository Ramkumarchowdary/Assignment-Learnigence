/**
 * Main Component
 *
 * The main content component representing a virtual classroom interface.
 * It includes headers, navigation, and a student container with video and control icons.
 *
 * @component
 * @example
 * // Example usage in another component or file:
 * import Main from './path/to/Main';
 * // ...
 * function AnotherComponent() {
 *   return (
 *     <Main />
 *   );
 * }
 */
import React from 'react';
import Video from './Video'; // Assuming Video is another component
import style from './main.module.css';

/**
 * Main functional component
 *
 * @returns {JSX.Element} The rendered Main component.
 */
const Main = () => {
  return (
    <div className={style.mainclass}>
      {/* Header Section */}
      <div className={style.mainflexbox}>
        <div className={style.mainheader}>
          <p>➡️</p>
          <p>Basic Mathematics 101</p>
        </div>
        <div className={style.mainheader}>
          <p>📞 Call Teacher</p>
          <p>👨‍💼 Support</p>
        </div>
      </div>

      {/* Navigation Section */}
      <div className={style.mainnav}>
        <p>🏛️ ClassRoom</p>
        <p>💻 White Board</p>
        <p className={style.mainvideo}>🎞️ Videos</p>
        <p>🎚️ Slide SHow</p>
        <p>📃 Document</p>
      </div>

      {/* Student Container Section */}
      <div className={style.studentcontainer}>
        <div className={style.mainstudentbar}>
          <div className={style.studentimg}>
            {/* Student Images */}
            <img
              src="https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_1280.jpg"
              width={'180px'}
              height={'150px'}
              alt=""
            />
            <img
              src="https://cdn.pixabay.com/photo/2015/09/22/15/02/studying-951818_640.jpg"
              width={'180px'}
              height={'150px'}
              alt=""
            />

            {/* Student Control Icons */}
            <div className={style.studenticones}>
              <div className={style.studentflexbox}>
                <div className={style.studenticon}>
                  <span>🎥</span>
                  <p>Cam</p>
                </div>
                <div className={style.studenticon}>
                  <span>🎙️</span>
                  <p>Mic</p>
                </div>
                <div className={style.studenticon}>
                  <span>💬</span>
                  <p>Share</p>
                </div>
                <div className={style.studenticon}>
                  <span>💬</span>
                  <p>Chat</p>
                </div>
                <div className={`${style.studenticon} `}>
                  <span>🤚</span>
                  <p>Rise</p>
                </div>
                <div className={`${style.studenticon} ${style.studenticon2}`}>
                  <span>💨</span>
                  <p>Leave</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Video Section */}
        <div className={style.studentcontainerchild}>
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Main;
