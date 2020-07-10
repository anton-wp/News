<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <block-notes />
                <!-- <vrd-pbn></vrd-pbn>
        <vrd-pbn></vrd-pbn>
                <vrd-pbn></vrd-pbn>-->
            </div>
            <div class="col-12 button-block">
                <nuxt-link class="link" to="/profile/dashboard/add-note">
                    <button class="add">Add note</button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import BlockNotes from "~/components/profile/block-notes";

export default {
    middleware: "auth",
    layout: "profile",
    components: {
        BlockNotes
    }
};
</script>

<style lang="scss" scoped>
.button-block {
    display: flex;
    margin-top: 60px;

    .link {
        margin-left: auto;
    }

    .add {
        background-color: #ff4242;
        &:hover {
            background-color: #bc2d2d;
        }
    }
    button {
        margin-left: auto;
        box-sizing: inherit;
        text-decoration: none;
        display: inline-block;
        vertical-align: middle;
        // margin: 0 0 1rem;
        font-family: inherit;
        border: 1px solid transparent;
        border-radius: 0;
        transition: background-color 0.25s ease-out, color 0.25s ease-out;
        font-size: 0.9rem;
        line-height: 1;
        text-align: center;
        cursor: pointer;
        color: #fefefe;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        user-select: none;
        padding: 0.85em 1.4em 0.8em;
    }
}
</style>
