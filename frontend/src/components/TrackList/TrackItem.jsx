import React from "react";
import PropTypes from "prop-types";

function TrackItem({ id, title, duration, artist, picture, handleCurrentId }) {
  return (
    <div className="flex p-2 bg-gray opacity-90 rounded-md my-1 text-white items-center justify-between  overflow-hidden flex-row align-middle">
      <img className="w-10 h-10" src={picture} alt="" />
      <h2 className="mx-7">
        {title} - {artist}
      </h2>
      <p className="mx-7">{duration}</p>
      <img
        aria-hidden="true"
        className="w-3 h-3"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAA0NDSwsLDGxsZvb2/x8fGIiIibm5vDw8P7+/vV1dX39/fj4+Ovr6+BgYEsLCxBQUETExPq6upQUFAfHx9ra2smJiZXV1fb29ugoKBMTEwaGhoODg46OjoiIiKikRPTAAAEVElEQVR4nO2d21JTQRBF2VFE8YYRBUHg//+SlBTYgZNkbj29e1fWKy+zKgWLnDPTc3KyzPnpzx0/keECN9FLcGYF/PgcvQhXNobAWfQqPPlniL/vo9fhx5MhcPoheiVePBvi7l30Upx4MQRuNcNhDKEZji1DyXBsGyqG47Uh1mrheGMoF44FQ6ylwrFkCFwKhWPZUCkcuwx1wrHTUCYcewxFwrHPUCMc+w0VwnHAUCAcBw3Th6PAMHk4Sgxzh6PMMPOjqkLDxOEoNkwbjnLDrOGoMQQ+Ri+3gTpD3OcLR6XhJhzn0UuupNoQv5KFo94wWzhaDHO942gyTBWORsNE4Wg2TBOOdsMs4egxxEOGcHQZAr/5w9FpmCAcvYbANXk4+g3ZwzHCECvmcAwxpA7HIENc0YZjlCFvOMYZApzhGGmI66/ROgsMNaQMx2BDXPyJNnrNaMNNOL5EO20z3hBXn6KltnAwJAuHiyFVOJwMicLhZcgTDj9DlnA4GpKEw9WQIhy+hptwhH+M3obx4fA3jA7HBMPgcEwxDA3HHMPIcMwyjAvHNMOwcEw0DArHVMOQcMw1jAjHbEOsZodjuuH0cAQYTg5HhCFwOvFjjDGcGY4ow3nhCDOcFo5Aw0nhiDQEvk/4ixNriAf/cAQbTtiOG27oHg4CQ+dwMBj6hoPDEPd+4SAx3ITDa1cVjaHbOQ4eQ69wMBkC3+QNcTk+HGSGDuGgMxweDj7D0eFgNBx7cpzScGg4SA0HfuOgNcTtoHDwGo4KB7PhmJEj1IabcMgb4q47HOyG/eHgN+z9xpHBsC8cKQy7wpHEsCMcWQzbw5HHEGgLRyZDNF3kkMoQdw3hyGXY8tuYy1D+M5T/PVT/W6reQ/n/adT/L5X/bqH+/VD9O778cxr1Z23yz0vVn3nLv7dQf/ek/v5Q/h2w+nt8+b0Y6vtp5PdEqe9rU9+bKL+/VH2PsPw+b/W9+vLnLdTPzKife5I/u6Z+/lD+DKn6OWD5s9zq5/HVZyrIz8VQn20iP59GfcaQ/Jwo9Vlf6vPa5Gfuqc9NlJ99qT6/VH4GrfocYfVZ0PLzvNVnssvP1Ve/G0H+fovoRBiO98w0wJAIw/G+p1pIEmE43rtWBU8iDMf7D8uhSoRhlKH8PaTqd8nK3wdMmAhDv6H6vdzyd6uzJsLQZfhAmwhDjyFxIgzthvfMiTA0G3InwtBoeEmeCEOTIX8iDC2G7pteh1Jv6HUuwotqwxyJMFQaZkmEoc4wTSIMNYaJEmEoN1xnSoSh2DBXIgyFhkNPV8+lzPAsepkdlBgOGcARRoHhTfQa+zhomDMRhgOGWRNh2G+YNhGGfYbrvIkw7DHMnAjDTsPciTDsMkyeCMOyYfpEGJYMBRJhWDBUSIThjaFGIgyvDUUSYdg2lEmEYctQJxEGY3grlAjDi2GqdxE1PBuKJcLwZJj4QdNBVpqJMKw0E2G40EzEf86brhtg5BFNPmKjGDrWvQAAAABJRU5ErkJggg=="
        alt="fleche lecture"
        onClick={() => {
          handleCurrentId(id);
        }}
      />
    </div>
  );
}

export default TrackItem;

TrackItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  handleCurrentId: PropTypes.func.isRequired,
};
