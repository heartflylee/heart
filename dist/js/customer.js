$(document).ready(function() {

    var url = "js/jqx/data.json";
    var source = {
        datatype: 'json',
        datafields: [
            { name: 'cusid', type: 'string' },
            { name: 'cusname', type: 'string' },
            { name: 'cellphone', type: 'string' },
            { name: 'company', type: 'string' },
            { name: 'position', type: 'string' },
            { name: 'createdTime', type: 'string' },
            { name: 'userName', type: 'string' },
            { name: 'comAdress', type: 'string' },
            { name: 'progress', type: 'string' },
            { name: 'lastActionTime', type: 'string' },
            { name: 'comType', type: 'string' },
            { name: 'mainProduce', type: 'string' },
            { name: 'customerSource', type: 'string' },
            { name: 'actState', type: 'string' },
            { name: 'isDistribution', type: 'string' },
            { name: 'actionType', type: 'string' },
            { name: 'remark', type: 'string' },
            { name: 'operName', type: 'string' },
            { name: 'registCapi', type: 'string' },
            { name: 'lastAction', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'wechat', type: 'string' },
            { name: 'qq', type: 'string' },
            { name: 'callDuration', type: 'string' },
            { name: 'mailState', type: 'string' },
            { name: 'endcallMsgStatus', type: 'string' },
            { name: 'cellphone2', type: 'string' },
            { name: 'gender', type: 'string' },
            { name: 'birthday', type: 'string' },
            { name: 'reception', type: 'string' },
            { name: 'telephone', type: 'string' },
            { name: 'fax', type: 'string' },
            { name: 'spare1', type: 'string' },
            { name: 'spare2', type: 'string' },
            { name: 'spare3', type: 'string' },
            { name: 'spare4', type: 'string' },
            { name: 'spare5', type: 'string' },
            { name: 'lock', type: 'int' }
        ],
        id: 'cusid',
        url: url
    };
    console.log(source);
    var dataAdapter = new $.jqx.dataAdapter(source);
    console.log(dataAdapter);
    var rows = [];
    //修改前
    var cellbeginedit = function(row, datafield, columntype, value, data, rowdata) {

        console.log(row);
        console.log(datafield);
        console.log(columntype);
        console.log(value);

        console.log(data);
        console.log(rowdata);
        if(rows.indexOf(row) >= 0) {
            return false;
        }
    }
    //修改结束后
    var cellendedit = function(row, datafield, columntype, value, data, rowdata) {

        console.log(row);
        console.log(datafield);
        console.log(columntype);
        console.log(value);
        console.log(data);
        console.log(rowdata);

        //					if(rows.indexOf(row) >= 0) {
        //						return false;
        //					}
    }
    //表头
    var columns = [{
        text: '<i class="icon icon-table"></i>',
        width: 20,
        pinned: true,
        sortable: !1,
//						filterable:!1,
    },
        {
            text: '客户名称',
            datafield: 'cusname',
            width: 80,
            pinned: true,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            cellsrenderer: function(row, column, value, defaultHtml, style, rowData) {
                console.log(rowData)
                if(rowData.lock == 1) {
                    if(rows.indexOf(row) < 0) {
                        rows.push(row);
                    }
                    return '<i class="icon-lock" data-id="' + rowData.cusid + '"></i><div class="jqx-grid-cell-left-align" data-id="' + rowData.cusid + '">' + value + '</div>';
                }
                return '<i class="" data-id="' + rowData.cusid + '"></i><div class="jqx-grid-cell-left-align" data-id="' + rowData.cusid + '">' + value + '</div>';
            },
        },
        { text: '手机号码', datafield: 'cellphone', width: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '职位', datafield: 'position', width: 60, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '销售进度', datafield: 'progress', width: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '创建时间', datafield: 'createdTime', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '联系时间', datafield: 'lastActionTime', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '跟进人', datafield: 'userName', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '公司名称', datafield: 'company', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '公司地址', datafield: 'comAdress', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '公司类型', datafield: 'comType', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '经营范围', datafield: 'mainProduce', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '企业法人', datafield: 'operName', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '数据来源', datafield: 'customerSource', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '沟通状态', datafield: 'actState', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '分配状态', datafield: 'isDistribution', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '电话结果', datafield: 'actionType', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '电话标签', datafield: 'lastAction', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '备注', datafield: 'remark', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '注册资本', datafield: 'registCapi', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '邮箱', datafield: 'email', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '微信', datafield: 'wechat', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: 'QQ', datafield: 'qq', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '通话录音', datafield: 'callDuration', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '短信状态', datafield: 'msgState', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '邮件状态', datafield: 'mailState', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '挂机短信状态', datafield: 'endcallMsgStatus', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '手机2', datafield: 'cellphone2', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '性别', datafield: 'gender', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '生日', datafield: 'birthday', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '前台电话', datafield: 'reception', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '座机', datafield: 'telephone', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '传真', datafield: 'fax', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '备用1', datafield: 'spare1', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '备用2', datafield: 'spare2', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '备用3', datafield: 'spare3', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '备用4', datafield: 'spare4', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
        { text: '备用5', datafield: 'spare5', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit, },
    ];

    var addfilter = function() {
        //					var filtergroup = new $.jqx.filter();
        //
        //					var filter_or_operator = 1;
        //					var filtervalue = '';
        //					var filtercondition = 'contains';
        //					var filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        //
        //					filtervalue = '';
        //					filtercondition = 'starts_with';
        //					var filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        //
        //					filtergroup.addfilter(filter_or_operator, filter1);
        //					filtergroup.addfilter(filter_or_operator, filter2);
        //					// add the filters.
        //					$("#jqxtable").jqxGrid('addfilter', 'name', filtergroup);
        // apply the filters.
        $("#jqxtable").jqxGrid('applyfilters');
    }
    console.log(dataAdapter);

    // create jqxgrid.
    $("#jqxtable").jqxGrid({
        width: '100%',
        height: '100%',
        source: dataAdapter,
        columnsresize: true, //调整列的宽度
        scrollbarsize: 7,
        sortable: false, //排序
//					filterable: false,
        ready: function() {
//						addfilter();
        },
        scrollmode: 'logical',
        altrows: true, //交替行，单数行和双数行不同
        pageable: true, //分页
        pagesize: 40, //每页显示行数
        pagermode: 'simple', //分页样式
        editable: true,
        editmode: 'dblclick', //双击
        selectionmode: 'checkbox', //选择框
        rowsheight: 40, //行高
        pagerheight: 50,
        //					showsortmenuitems: !1,
        columns: columns
    });

    $("#jqxtable").on('cellclick', function(event) {
        console.log(event);
        if(event.args.datafield == 'cusname') {
            customerShow();
        } else {
            return false;
        }
    });

    //表格内复选框
    $("#jqxtable").on('rowselect rowunselect', function(e) {
        var rowindexes = $('#jqxtable').jqxGrid('getselectedrowindexes');
        var setting = $(".table-setting");
        if(rowindexes.length > 0) {
            setting.fadeIn();
        } else {
            setting.fadeOut();
        }
        setting.find(".count-select").text(rowindexes.length);
    });
    //显示自定义表头
    $('#jqxtable').on('columnclick', function(event) {
        console.log(event);
        console.log(event.args)
        if(event.args.datafield == null) {
            CustomHead();
        }
    });
    $(".table-setting").find(".close-gray").click(function() {
        $(".table-setting").fadeOut();
    });
});

//详情内下拉
function detailDrop(obj, event) {
    var $obj = $(obj).next(".h-r-drop");
    if($obj.css("display") == "block") {
        $obj.hide();
        return false;
    }
    $obj.show();
    $(".layer-detail").one("click", function() {
        $(".h-r-drop").hide();
    });
    event.stopPropagation();
}
$(function() {
    $(".h-r-drop").click(function(event) {
        event.stopPropagation();
    })
});

//显示客户详情
function customerShow() {
    // $(".layer-detail-warp").addClass("active");
    $("#detail").modal("show");
}
$(function() {
    // $(".layer-bg").click(function(event) {
    //     $(".layer-detail-warp").removeClass("active");
    // });
});

//详情内新建联系人
function addCustomer(){
    $("#customer").modal("show");
    //data-target="#customer"
}
//下拉菜单
function menuDropdown(obj){
    $(obj).dropdown();
}

//自定义表头
function CustomHead() {
    console.log("自定义表头");
    // layerShow("#customHead");
    $("#customHead").modal("show");
}

//自定义表头
$(function() {
    var leftsource = [

    ];
    var rightsource = [
        { label: '客户姓名', value: 'name' },
        { label: '手机号码', name: 'phone' },
        { label: '职位', value: 'major' },
        { label: '销售进度', value: 'progress' },
        { label: '创建时间', value: 'creatTime' },
        { label: '联系时间', value: 'contactTime' },
        { label: '跟进人', value: 'follow' },
        { label: '公司名称', value: 'company' },
        { label: '公司地址', value: 'address' }
    ];
    $("#list-left").jqxListBox({ width: 200, height: 335, source: leftsource });
    $("#list-right").jqxListBox({ width: 200, height: 335, source: rightsource });
});

//自定义表头的位置和显示
function listMove(directionIndex) {
    var box = "left";
    var obox = "right";
    var opposing = ["left", "right"];
    var direction = ["right", "left"];
    if(directionIndex >= 2) {
        box = obox = "right";
    } else {
        box = direction[directionIndex];
        obox = opposing[directionIndex];
    }
    var item = $("#list-" + box).jqxListBox('getSelectedItems');
    var Addindex;
    if(item.length > 0) {
        var removeIndex = $("#list-" + box).jqxListBox('getSelectedIndex');
        if(directionIndex == 2) {
            Addindex = removeIndex - 1;
        } else if(directionIndex == 3) {
            Addindex = removeIndex + 1;
        } else {
            Addindex = $("#list-" + obox).jqxListBox('getSelectedIndex');
        }
        $("#list-" + box).jqxListBox('removeAt', removeIndex);
        $("#list-" + obox).jqxListBox('insertAt', { label: item[0].label, value: item[0].value }, Addindex);
        $("#list-" + obox).jqxListBox('selectItem', item[0].value);
    }
}

//自定义表头保存
function customSubmit() {
    var itemShow = $("#list-right").jqxListBox('getItems');
    var itemHide = $("#list-left").jqxListBox('getItems');
    $("#jqxtable").jqxGrid('beginupdate');
    for(var i = 0; i < itemShow.length; i++) {
        $("#jqxtable").jqxGrid('showcolumn', itemShow[i].value);
    }
    for(var i = 0; i < itemHide.length; i++) {
        $("#jqxtable").jqxGrid('hidecolumn', itemHide[i].value);
    }
    $("#jqxtable").jqxGrid('endupdate');
    layerClose("#customHead");
}
//客户详情切换
function tags(obj) {
    var $obj = $(obj);
    var objli = $obj.parent(".tags-li");
    if(objli.hasClass("active")) {
        return false;
    }
    var index = objli.index(".tags-li");
    var tags = objli.parents(".tags");
    var tagsMain = tags.next();
    var tagsShow = $(".tags-con-li:eq(" + index + ")");
    tags.find(".tags-li").removeClass("active");
    objli.addClass("active");
    tagsMain.find(".tags-con-li").removeClass("active");
    tagsShow.addClass("active");
}
//详情内相关的显示隐藏
function detail(obj) {
    var dMain = $(obj).parents(".list-title").next(".list-main");
    if($(obj).hasClass("active")) {
        dMain.show();
        $(obj).removeClass("active")
    } else {
        dMain.hide();
        $(obj).addClass("active");
    }
}