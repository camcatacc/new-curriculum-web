import { Avatar } from "@material-ui/core";
import React from "react";
import { InlineStyles } from "../../styles/stylesInterface";
import { AvatarName } from "../atoms/AvatarName";

export const AvatarWithName = (props: { name: string; surname: string }) => {
    return (
        <>
            <div
                style={{ paddingTop: "100%" }}
                className="w-full relative mb-4"
            >
                <Avatar
                    /* The style must be inline instead of tailwind because
                    the material ui would override it */
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    /* className="w-full h-full absolute top-0 left-0 bottom-0 right-0" */
                    src="/me.jpg"
                />
            </div>
            <AvatarName name={props.name} surname={props.surname} />
        </>
    );
};

const styles: InlineStyles = {
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
    },
    avatarContainer: {
        width: "100%",
        paddingTop: "100%",
        position: "relative",
        marginBottom: "1rem",
    },
    avatar: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
};
