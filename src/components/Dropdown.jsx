function Dropdown() {
  return (
    <>
      {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
      {/* For TSX uncomment the commented types below */}
      <button
        className="btn border-black border bg-white/20 backdrop-blur-lg w-30 h-10 rounded-2xl hover:bg-green-500"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
      >
        Roles
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
      >
        <li>
          <a>Test </a>
        </li>
        <li>
          <a>Test </a>
        </li>
      </ul>
    </>
  );
}
export default Dropdown;
