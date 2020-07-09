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
        postid: Number | String,
        editContent: Object | String
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
            this.editor.save().then(content => {
                this.$emit("input", content);
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

            data: this.editContent,

            tools: {
                header: Header,
                linkTool: {
                    class: LinkTool,
                    config: {
                        endpoint: "/api/posts/create-helpers/link-meta"
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
                            coub: true,
                            codepen: {
                                regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                                embedUrl:
                                    "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
                                html:
                                    "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                                height: 300,
                                width: 600,
                                id: groups => groups.join("/embed/")
                            },
                            twitter: {
                                regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/,
                                embedUrl:
                                    "https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",
                                html:
                                    '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
                                height: 300,
                                width: 600,
                                id: ids => ids.join("/status/")
                            },

                            instagram: {
                                regex: /(?:https?:\/\/(?:www\.)?)?instagram\.com(\/p\/\w+\/?)\/\?utm_source=ig_web_copy_link/,
                                embedUrl:
                                    "https://www.instagram.com<%= remote_id %>/embed",
                                html:
                                    '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
                                height: 505,
                                width: 400
                                // /(https?:\/\/(www\.)?)?instagram\.com(\/p\/\w+\/?)/,

                                // /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?/

                                // embedUrl:
                                //     "https://www.instagram.com/p/<%= remote_id[3].substr(3) %>/embed",
                                // html:
                                //     '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',

                                // html:
                                // 	'<iframe width="320" height="440" src="http://instagram.com/p/qbq6fIJMVZ/embed" frameborder="0"></iframe>',

                                // https://www.instagram.com/p/CCYVrjVFYjS/?utm_source=ig_web_copy_link

                                // https://www.instagram.com/p/CCYVrjVFYjS/?utm_source=ig_web_button_share_sheet
                            }
                        }
                    }
                }
            },

            onChange: () => {
                this.save();

                // console.log('https://www.instagram.com/p/CCYVrjVFYjS/?utm_source=ig_web_button_share_sheet'.match(/(https?:\/\/(www\.)?)?instagram\.com(\/p\/\w+\/?)/)[3].substr(3))
            }
        });
        console.log(this.postId);
    },
    created() {
        this.token = this.$auth.getToken("local");
    }
};
</script>
