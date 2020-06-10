<template>
    <div id="editor"></div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

export default {
    mounted() {
        const editor = new EditorJS({
            /**
             * Id of Element that should contain the Editor
             */
            holderId: "editor",

            tools: {
                header: Header
            }
        });
    }
};
</script>
