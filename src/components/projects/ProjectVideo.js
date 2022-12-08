const ProjectVideo = ({ singleProjectData }) => {
  //const { singleProjectData } = useContext(SingleProjectContext);
  if (!singleProjectData.ProjectVideo) {
    return <></>;
  }
  return (
    <div className="flex justify-center">
      <video preload="auto" controls className="items-center content-center">
        <source src={singleProjectData?.ProjectVideo} type="video/mp4"></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default ProjectVideo;
