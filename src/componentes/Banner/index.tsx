import './Banner.css'

interface BannerProps {
        urlImage: string
        alt?: string

}

export const Banner = ({ urlImage, alt}: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={urlImage} alt={alt}/>
        </header>
    )
}

export default Banner