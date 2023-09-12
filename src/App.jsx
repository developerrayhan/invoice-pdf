import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Invoice from "./components/invoice";

const App = () => {
    return (
        <>
            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                <Invoice />
            </PDFViewer>
            <PDFDownloadLink document={<Invoice />}>download</PDFDownloadLink>
        </>
    );
};

export default App;
