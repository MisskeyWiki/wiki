class CORE {
    Copy() {
        try {
            navigator.clipboard.writeText(location.href);
            const copyElements = document.getElementsByClassName("copy");
            for (let i = 0; i < copyElements.length; i++) {
                copyElements[i].textContent = "OK";
            }
            setTimeout(() => {
                for (let i = 0; i < copyElements.length; i++) {
                    copyElements[i].textContent = "COPY";
                }
            }, 600);
        } catch (error) {
            // 後でやる
        }
    }

    Twitter() {
        const Title = (document.getElementsByTagName("title")[0].textContent).replace(/[ ,{,}]/g, "");
        open("https://twitter.com/intent/tweet?text=" + Title + "&url=" + location.href, "_self", "nofollow,noopener,noreferrer");
    }

    Line() {
        open("https://timeline.line.me/social-plugin/share?url=" + location.href, "_self", "nofollow,noopener,noreferrer");
    }

    Pocket() {
        open("https://widgets.getpocket.com/v1/popup?url=" + location.href, "_self", "nofollow,noopener,noreferrer");
    }
}
const Core = new CORE;