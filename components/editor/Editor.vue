<template>
    <div id="editor" ref="editor"></div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Embed from "@editorjs/embed";

export default {
    props: {
        postid: Number | String
    },
    data() {
        return {
            editor: undefined,
            blocks: undefined,
            token: undefined
            // id: this.postid
        };
    },
    methods: {
        save() {
            this.editor.save().then(({ blocks }) => {
                this.$emit("input", blocks);
                this.$emit("editor:saved");
            });
        }
    },
    mounted() {
        this.editor = new EditorJS({
            /**
             * Id of Element that should contain the Editor
             */
            holderId: "editor",

            tools: {
                header: Header,
                linkTool: {
                    class: LinkTool,
                    config: {
                        endpoint: "/api/" // Your backend endpoint for url data fetching
                    }
                },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: "/api/media/post-content-image/file", // Your backend file uploader endpoint
                            byUrl: "/api/media/post-content-image/link" // Your endpoint that provides uploading by Url
                        },
                        additionalRequestHeaders: {
                            Authorization: this.token
                        },
                        additionalRequestData: {
                            postId: this.postid
                        }
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true
                },
                embed: {
                    class: Embed,
                    config: {
                        services: {
                            youtube: true,
                            facebook: true,
                            twitter: true,
                            instagram: true,

                        }
                    }
                }
            },

            onChange: () => {
                this.save();
            }
        });
        console.log(this.postId);
    },
    created() {
        this.token = this.$auth.getToken("local");
    }
};
</script>
