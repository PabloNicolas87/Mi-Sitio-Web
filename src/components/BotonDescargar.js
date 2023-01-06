import { useTranslation } from "react-i18next"

const BotonDescargar = () => {
    const [t] = useTranslation("global");
	const onButtonClick = () => {
		fetch('CV-POR-Pablo Girone.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'CV-POR-Pablo Girone.pdf';
				alink.click();
			})
		})
	}
	return (
        <button className="blue-btn" onClick={onButtonClick}>
            {t("contact.download")}
        </button>
	);
};

export default BotonDescargar;
