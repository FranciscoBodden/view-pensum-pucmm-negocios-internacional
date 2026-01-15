import { useNavigate } from 'react-router-dom'

function AppFooter() {
    const navigate = useNavigate()

    return (
        <footer className="navbar navbar-expand navbar-light static-bottom app-footer">
            <span>Pensum Extractor DO</span>
            <span></span>
            <span>
            </span>
        </footer>
    )
}

export default AppFooter
