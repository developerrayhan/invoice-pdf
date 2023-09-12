import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const combineObjects = (...objects) => {
    return Object.assign({}, ...objects);
};

const styles = StyleSheet.create({
    page: {
        padding: "40px",
    },
    padding1: {
        padding: "4px",
    },
    paddingX2: {
        paddingLeft: "8px",
        paddingRight: "8px",
    },
    padding2: {
        padding: "8px",
    },
    padding10: {
        padding: "40px",
    },
    Image: {
        width: "150x",
        height: "auto",
    },
    flex: {
        display: "flex",
    },
    flexRow: {
        flexDirection: "row",
    },
    flexCol: {
        flexDirection: "column",
    },
    colorPrimary: {
        color: "#334155",
    },
    colorSecondary: {
        color: "#64748b",
    },
    gap1: {
        gap: "4px",
    },
    gap3: {
        gap: "12px",
    },
    gap10: {
        gap: "40px",
    },
    gap5: {
        gap: "20px",
    },
    justifyBetween: {
        justifyContent: "space-between",
    },
    justifyEnd: {
        justifyContent: "flex-end",
    },
    alignItems: {
        alignItems: "center",
    },
    flex1: {
        flex: "1 1 0%",
    },
    flexAuto: {
        flex: "auto",
    },
    bgGray200: {
        backgroundColor: "#e5e7eb",
    },
    bgGray800: {
        backgroundColor: "#1f2937",
    },
    textXs: {
        fontSize: "11px",
    },
    textSm: {
        fontSize: "14px",
    },
    textBase: {
        fontSize: "16px",
    },
    textLg: {
        fontSize: "18px",
    },
    textXl: {
        fontSize: "24px",
    },
    textRight: {
        textAlign: "right",
    },
    fontBold: {
        fontWeight: "600",
    },
    border: {
        borderWidth: "1px",
        borderColor: "#f1f5f9",
    },
    rounded: {
        borderRadius: "4px",
    },
});

const Invoice = () => {
    return (
        <>
            <Document size={"A4"}>
                <Page
                    style={combineObjects(
                        styles.page,
                        styles.colorPrimary,
                        styles.textSm,
                        styles.flex,
                        styles.flexCol,
                        styles.gap10
                    )}
                    size={"A4"}
                >
                    {/* image and title */}
                    <View style={combineObjects(styles.flex, styles.flexRow, styles.justifyBetween, styles.alignItems)}>
                        <View>
                            <Image src={"/public/logo.png"} style={styles.Image} />
                        </View>
                        <View style={combineObjects(styles.flex, styles.flexCol)}>
                            <Text style={styles.textXl}>Invoice</Text>
                            <Text
                                style={combineObjects(
                                    styles.textXs,
                                    styles.colorSecondary,
                                    styles.flex,
                                    styles.justifyEnd,
                                    styles.flexRow
                                )}
                            >
                                #123
                            </Text>
                        </View>
                    </View>

                    {/* main info */}
                    <View style={combineObjects(styles.flex, styles.flexRow, styles.gap10, styles.justifyBetween)}>
                        {/* personal */}
                        <View style={combineObjects(styles.flex, styles.flexCol, styles.gap5, styles.flex1)}>
                            {/* from */}
                            <View>
                                <Text>Version Originale</Text>
                            </View>
                            {/* to */}
                            {/* bill */}
                            <View>
                                <Text style={combineObjects(styles.textSm, styles.colorSecondary)}>Bill To:</Text>
                                <Text>Rayhan Bapari</Text>
                            </View>

                            {/* Ship to */}
                            <View>
                                <Text style={combineObjects(styles.textSm, styles.colorSecondary)}>Ship To:</Text>
                                <Text>{`
                                        1234 Main Street, Suite #123, Suite #123, Some City, Some Country,
                                    `}</Text>
                            </View>
                        </View>

                        {/* Other main info */}
                        <View style={combineObjects(styles.flex1, styles.flex, styles.flexCol, styles.gap3)}>
                            {/* date */}
                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Date:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>May 3, 2023</Text>
                            </View>

                            {/* Payment Terms */}
                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Payments Terms:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>Some Terms</Text>
                            </View>

                            {/* Due Date */}
                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Due Date:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>May 31, 2023</Text>
                            </View>

                            {/* PO Number */}
                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    PO number:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>1234</Text>
                            </View>

                            {/* Balance Due */}
                            <View
                                style={combineObjects(
                                    styles.flex,
                                    styles.flexRow,
                                    styles.bgGray200,
                                    styles.padding2,
                                    styles.fontBold,
                                    styles.rounded
                                )}
                            >
                                <Text
                                    style={combineObjects(styles.flex, styles.flexRow, styles.flex1, styles.textRight)}
                                >
                                    Balance Due:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>$6,493.40</Text>
                            </View>
                        </View>
                    </View>

                    {/* Items */}
                    <View>
                        {/* Items header */}
                        <View
                            style={combineObjects(
                                styles.flex,
                                styles.flexRow,
                                styles.rounded,
                                styles.bgGray800,
                                styles.padding1,
                                styles.paddingX2,
                                { color: "white" },
                                styles.textXs
                            )}
                        >
                            <Text style={styles.flexAuto}>Item</Text>
                            <Text style={{ width: "15%" }}>Quantity</Text>
                            <Text style={combineObjects({ width: "15%" }, styles.textRight)}>Rate</Text>
                            <Text style={combineObjects({ width: "15%" }, styles.textRight)}>Amount</Text>
                        </View>

                        {/* Items List */}
                        <View
                            style={combineObjects(
                                styles.flex,
                                styles.flexRow,
                                styles.rounded,
                                styles.padding1,
                                styles.paddingX2,
                                styles.textXs
                            )}
                        >
                            <Text style={styles.flexAuto}>Computers</Text>
                            <Text style={{ width: "15%" }}>12</Text>
                            <Text style={combineObjects({ width: "15%" }, styles.textRight)}>$7,500.00</Text>
                            <Text style={combineObjects({ width: "15%" }, styles.textRight)}>$90,000.00</Text>
                        </View>

                        <View
                            style={combineObjects(
                                styles.flex,
                                styles.flexRow,
                                styles.rounded,
                                styles.padding1,
                                styles.paddingX2,
                                styles.textXs
                            )}
                        >
                            <Text style={styles.flexAuto}>Computers</Text>
                            <Text style={{ width: "15%" }}>12</Text>
                            <Text style={combineObjects({ width: "15%" }, styles.textRight)}>$7,500.00</Text>
                            <Text style={combineObjects({ width: "15%" }, styles.textRight)}>$90,000.00</Text>
                        </View>
                    </View>

                    {/* Totals and additional Payment */}
                    <View
                        style={combineObjects(styles.flex, styles.flexCol, styles.gap3, {
                            alignItems: "flex-end",
                            paddingTop: "40px",
                        })}
                    >
                        <View
                            style={combineObjects(styles.flex, styles.flexCol, styles.gap3, {
                                width: "50%",
                            })}
                        >
                            {/* subtotal */}
                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Subtotal:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>$90,200.00</Text>
                            </View>

                            {/* Payment Terms */}
                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Payments Terms:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>Some Terms</Text>
                            </View>

                            {/* Discount */}
                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Discount:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>$2,706.00</Text>
                            </View>

                            {/* Tax */}
                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Tax (10%):
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>$8,749.40</Text>
                            </View>

                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Shipping:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>$8,749.40</Text>
                            </View>

                            <View style={combineObjects(styles.flex, styles.flexRow)}>
                                <Text
                                    style={combineObjects(
                                        styles.colorSecondary,
                                        styles.flex,
                                        styles.flexRow,
                                        styles.flex1,
                                        styles.textRight
                                    )}
                                >
                                    Total:
                                </Text>
                                <Text style={combineObjects(styles.flex1, styles.textRight)}>$8,749.40</Text>
                            </View>
                        </View>
                    </View>

                    {/* Notes and Terms */}
                    <View
                        style={combineObjects(styles.flex, styles.flexCol, styles.gap3, {
                            paddingTop: "30px",
                        })}
                    >
                        {/* Notes */}
                        <View>
                            <Text style={combineObjects(styles.textSm, styles.colorSecondary)}>Notes:</Text>
                            <Text>You can return any laptop in 48 hours if any errors</Text>
                        </View>

                        {/* Terms */}
                        <View>
                            <Text style={combineObjects(styles.textSm, styles.colorSecondary)}>Terms:</Text>
                            <Text>Terms and conditions - late fees, payment methods, delivery schedule</Text>
                        </View>
                    </View>
                </Page>
            </Document>
        </>
    );
};

export default Invoice;
