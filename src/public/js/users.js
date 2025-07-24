console.log("Users frontend javascript file");

$(function () {
    $(".member-status").on("change", async function (e) {
        const id = e.target.id,
         memberStatus = $(`#${id}.member-status`).val();
        // Axiosni Post methodidan foydalanamiz
         axios
            .post("/admin/user/edit",{_id: id, memberStatus,
            })
            .then((response) => {
                console.log("response", response);
                const result = response.data;
                if (result.data) {
                    $(".member-status").blur();
                } else alert("Member update failed!");
            })
            .catch((err) => {
                console.log(err);
                alert("Member update failed!");
            });
    });
               
});