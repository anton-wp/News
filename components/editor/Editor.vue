<template>
    <div id="editor" ref="editor"></div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";

export default {
    data() {
        return {
            editor: undefined,
            blocks: undefined
        };
    },
    methods: {
        save() {
            this.editor.save().then(({blocks}) => this.$emit("input", blocks));
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
                        endpoint: "http://localhost:3000/fetchUrl" // Your backend endpoint for url data fetching
                    }
                },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: "http://localhost:3000/uploadFile", // Your backend file uploader endpoint
                            byUrl: "http://localhost:3000/fetchUrl" // Your endpoint that provides uploading by Url
                        }
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true
                }
            },

            onChange: () => {
                this.save();
            }
        });

        // editor
        //     .save()
        //     .then(outputData => {
        //         console.log("Article data: ", outputData);
        //     })
        //     .catch(error => {
        //         console.log("Saving failed: ", error);
        //     });
    }
};
</script>


<style lang="scss" scoped>
#editor {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px;
}

.ce-block__content {
    max-width: 100%;
}
</style>
