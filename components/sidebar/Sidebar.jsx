import "./sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <span className="logo">adminpanel</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <li>Manage Post</li>
            <li>Manage User</li>
            <li>Manage Topics</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
