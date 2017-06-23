

{{if data && data.length}}
<p class="more-title"><span>更多搭配</span><img src="../images/moreMatch.png"></p>
<ul>
    {{each data}}
    <li>
        <a href="demo.html?articleId={{$value.hardcoverId}}">
            <img src="{{$value.titlePicUrl}}" onerror="this.src='../images/error.png'">
            <span class="tag-type">{{$value.recommendType}}</span>
            <div class="match-des">
                <p class="article-title">{{$value.title}}</p>
                <p class="house-type">
                    <span class="border-r">{{if $value.room}}<em>{{$value.room}}室</em>{{/if}}{{if $value.hall}}<em>{{$value.hall}}厅</em>{{/if}}{{if $value.bathroom }}<em>{{$value.bathroom}}卫</em>{{/if}}</span>
                    {{if $value.houseArea}}<span>{{$value.houseArea}}m²</span>{{/if}}
                </p>
                {{if $value.roomNum}}<em class="room-number">{{$value.roomNum}}个空间</em>{{/if}}
            </div>
        </a>
    </li>
    {{/each}}
</ul>
{{/if}}