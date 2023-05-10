import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import s from './Particles.module.scss'
export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            className={s.particles}
            options={
                {
                    particles: {
                        fullScreen: false,
                        number: {
                            value: 150,
                            density: {
                                enable: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                speed: 2,
                                size_min: 1
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            enable: true,
                            random: true,
                            speed: 2,
                            direction: 'top',
                            out_mode: 'out'
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                mode: "attract"
                            }
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 3,
                                opacity: 0
                            },
                            repulse: {
                                distance: 400,
                                duration: 15
                            }
                        }
                    }
                }} />
    );
};