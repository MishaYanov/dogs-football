import React from "react";
import PropTypes from "prop-types";
import "../../styles/components/gallery.scss";
//@ts-ignore
import ImageGallery from "react-image-gallery";

function gallery(props: any) {
  const photos = [
    {
      id: 1,
      original: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      tumbnail: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      alt: "img",
    },
    {
      id: 2,
      original: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      alt: "img",
    },
    {
      id: 3,
      original: "https://source.unsplash.com/qDkso9nvCg0/600x799",

      alt: "img",
    },
    {
      id: 4,
      original: "https://source.unsplash.com/iecJiKe_RNg/600x799",

      alt: "img",
    },
    {
      id: 5,

      original: "https://source.unsplash.com/epcsn8Ed8kY/600x799",

      alt: "img",
    },
    {
      id: 6,
      original: "https://source.unsplash.com/NQSWvyVRIJk/800x599",

      alt: "img",
    },
    {
      id: 7,
      original: "https://source.unsplash.com/zh7GEuORbUw/600x799",

      alt: "img",
    },
    {
      id: 8,
      original: "https://source.unsplash.com/PpOHJezOalU/800x599",

      alt: "img",
    },
    {
      id: 9,
      original: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      alt: "img",
    },
  ];

  return (
    <>
      <h1 className="gallery-header">Gallery</h1>
      <div className="gallery-wrapper">
        <ImageGallery
          additionalClass="gl"
          showFullscreenButton={true}
          showPlayButton={true}
          showBullets={true}
          showThumbnails={true}
          items={photos}
        />
      </div>
    </>
  );
}

gallery.propTypes = {};

export default gallery;
