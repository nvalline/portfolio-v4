import React, { Component } from 'react';
import Slider from 'react-slick';
import SlideContent from './SlideContent';
import ProjectData from '../../utils/projectData.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class ProjectSlide extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const data = ProjectData.sort((a, b) => (a.id < b.id) ? 1 : -1);

        return (
            <Slider {...settings}>
                {data.map(project => (
                    <SlideContent
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        repoLink={project.repoLink}
                        image={project.img}
                    />
                ))}
            </Slider>
        )
    }
}

export default ProjectSlide;
