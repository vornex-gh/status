fetch('https://api.lanyard.rest/v1/users/704002391464214548')
    .then(response => response.json())
    .then(data => {
        switch (data.data.discord_status) {
            case 'online':
                document.getElementById('status').innerHTML = '<svg width="20px" height="20px"><mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle></mask><circle fill="black" r="8" cx="8" cy="8"></circle><rect width="16" height="16" fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" mask="url(#svg-mask-status-online)" class="pointerEvents-9SZWKj"></rect></svg>';
                break;
            case 'idle':
                document.getElementById('status').innerHTML = '<svg width="20px" height="20px"><mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle><circle fill="black" cx="0.25" cy="0.25" r="0.375"></circle></mask><circle fill="black" r="8" cx="8" cy="8"></circle><rect width="16" height="16" fill="hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)" mask="url(#svg-mask-status-idle)" class="pointerEvents-9SZWKj"></rect></svg>';
                break;
            case 'dnd':
                document.getElementById('status').innerHTML = '<svg width="20px" height="20px"><mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle><rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125"></rect></mask><circle fill="black" r="8" cx="8" cy="8"></circle><rect width="16" height="16" fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" mask="url(#svg-mask-status-dnd)" class="pointerEvents-9SZWKj"></rect></svg>';
                break;
            case 'offline':
                document.getElementById('status').innerHTML = '<svg width="20px" height="20px"><mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle><circle fill="black" cx="0.5" cy="0.5" r="0.25"></circle></mask><circle fill="black" r="8" cx="8" cy="8"></circle><rect width="16" height="16" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)" mask="url(#svg-mask-status-offline)" class="pointerEvents-9SZWKj"></rect></svg>';
                break;
        }
        if (data.data.activities[0].name != null) {
            document.getElementById('presence-text').innerHTML = 'Playing ' + data.data.activities[0].name;
            if (data.data.activities[0].timestamps.start != null) {
                setInterval(function() {
                    document.getElementById('presence-time').innerHTML = new Date(Date.now() - new Date(data.data.activities[0].timestamps.start).getTime()).toISOString().substr(11, 8) + ' elapsed';
                }
                , 1000);

            }
        } else {
            document.getElementById('presence-text').innerHTML = 'Playing Nothing';
        }
    });
