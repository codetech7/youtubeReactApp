import React from "react";

 const VideoPanel = (props) => {
    console.log(props.videos);
    if(props.videos == null){
        return <div>loading...</div>
    }
    const id = props.videos.id.videoId;
    const source = `https://www.youtube.com/embed/${id}`

    return (
        <div>
            <div>  
            {/* /div to display videos  */}
            <iframe width="400" src={source}   ></iframe>
                {/* <source  type="video/mp4"/> */}
                {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
            

            </div> 

            <div>

                <div> 
                {/* div to diplay title */}
                <div>props.videos.title</div>
                </div>
                
                <div> 
                {/* to display description  */}
                
                 </div>
                
            </div>
        </div>

    );
  
}

export default VideoPanel;