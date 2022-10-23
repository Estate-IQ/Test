import React, { useState } from "react";
import FilterBy from "../components/Filters/Filterby";
import DownloadReports from "../components/Filters/D-Report";
const D_Filter = () => {
  const [selected, setSelected] = useState("Fiter by:");
  const [download, setDownload] = useState("Download Report");
  return (
    <div className="download_filter">
      <div className="ff-right">
        <h6>hello</h6>
      </div>
      <div className="filter_download">
        <FilterBy selected={selected} setSelected={setSelected} />
        <DownloadReports selected={download} setSelected={setDownload} />
      </div>
    </div>
  );
};

export default D_Filter;
