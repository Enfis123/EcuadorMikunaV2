export const styles = {
    chatWidget: {
        // Position
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#001514",
        // Padding
        paddingLeft: "18px",
        paddingRight: "18px",
        paddingTop: "7px",
        paddingBottom: "7px",
        // Border
        borderRadius: "10px",
        cursor: "pointer",
    },

    chatWidgetText: {
        color: "white",
        fontSize: "15px",
        marginLeft: "5px",
    },

    // Styling for model window 
    modalWindow: {
        // Position
        position: "fixed",
        bottom: "70px",
        right: "20px",
        // Size
        width: "370px",
        // width: "420px",
        height: "65vh",
        maxWidth: "calc(100% - 48px)",
        maxHeight: "calc(100% - 48px)",
        backgroundColor: "white",
        // Border
        borderRadius: "12px",
        border: '2px solid #001514',
        overflow: "hidden",
        // Shadow
        boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
        padding: "20px",

        fontFamily: "Tahoma",
    },

    chatInput: {
        position: "absolute",
        bottom: "0px",
    },


}