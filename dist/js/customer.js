$(document).ready(function () {

    /*制作假数据*/
    var data = [];
    var datalength = 90;
    for (var i = 0; i < datalength; i++) {
        var dataRow;
        dataRow = {
            "cellphone": "13699273847",
            "company": "北京联云天下",
            "position": "打杂",
            "createdTime": "2017-03-31",
            "comAdress": "建外SOHO西区",
            "progress": "",
            "lastActionTime": "",
            "comType": "",
            "mainProduct": "",
            "customerSource": "企业导入-客户 (3)",
            "isDistribution": "1",
            "actionType": "",
            "remark": "1",
            "operName": "",
            "registCapi": "",
            "lastAction": "",
            "email": "1",
            "wechat": "1",
            "qq": "",
            "callDuration": "1",
            "callDownload": "",
            "msgState": "",
            "endcallMsgStatus": "",
            "cellphone2": "",
            "gender": "",
            "birthday": "",
            "reception": "",
            "telephone": "1012345678",
            "fax": "1012345681",
            "spare1": "",
            "spare2": "",
            "spare3": "",
            "spare4": "",
            "spare5": ""
        };
        var cusname = ["刘晓辉", "王佳印", "艾云鹤", "王佳怡", "罗一山", "刘宇"];
        var username = ["", "新飞"];

        dataRow.cusid = parseInt(Math.random() * datalength);
        dataRow.cusname = cusname[parseInt(Math.random() * 6)];
        dataRow.username = username[parseInt(Math.random() * 2)];
        dataRow.actState = parseInt(Math.random() * 2);
        dataRow.lock = parseInt(Math.random() * 2);
        data.push(dataRow);
    }
    /*制作假数据*/
    var source = {
        datatype: 'json',
        datafields: [
            {name: 'cusid', type: 'string'},
            {name: 'cusname', type: 'string'},
            {name: 'cellphone', type: 'string'},
            {name: 'company', type: 'string'},
            {name: 'position', type: 'string'},
            {name: 'createdTime', type: 'string'},
            {name: 'userName', type: 'string'},
            {name: 'comAdress', type: 'string'},
            {name: 'progress', type: 'string'},
            {name: 'lastActionTime', type: 'string'},
            {name: 'comType', type: 'string'},
            {name: 'mainProduce', type: 'string'},
            {name: 'customerSource', type: 'string'},
            {name: 'actState', type: 'string'},
            {name: 'isDistribution', type: 'string'},
            {name: 'actionType', type: 'string'},
            {name: 'remark', type: 'string'},
            {name: 'operName', type: 'string'},
            {name: 'registCapi', type: 'string'},
            {name: 'lastAction', type: 'string'},
            {name: 'email', type: 'string'},
            {name: 'wechat', type: 'string'},
            {name: 'qq', type: 'string'},
            {name: 'callDuration', type: 'string'},
            {name: 'callDownload', type: 'string'},
            {name: 'mailState', type: 'string'},
            {name: 'endcallMsgStatus', type: 'string'},
            {name: 'cellphone2', type: 'string'},
            {name: 'gender', type: 'string'},
            {name: 'birthday', type: 'string'},
            {name: 'reception', type: 'string'},
            {name: 'telephone', type: 'string'},
            {name: 'fax', type: 'string'},
            {name: 'spare1', type: 'string'},
            {name: 'spare2', type: 'string'},
            {name: 'spare3', type: 'string'},
            {name: 'spare4', type: 'string'},
            {name: 'spare5', type: 'string'},
            {name: 'lock', type: 'int'}
        ],
        localdata: data
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    var rows = [];
    //修改前
    var cellbeginedit = function (row, datafield, columntype, value, data, rowdata) {
        // console.log(row);
        // console.log(datafield);
        // console.log(columntype);
        // console.log(value);
        // console.log(data);
        // console.log(rowdata);
        if (rows.indexOf(row) >= 0) {
            return false;
        }
    };
    //修改结束后
    var cellendedit = function (row, datafield, columntype, value, data, rowdata) {
        // console.log(row);
        // console.log(datafield);
        // console.log(columntype);
        // console.log(value);
        // console.log(data);
        // console.log(rowdata);

    }
    //表头
    var columns = [
        {
            text: '<i class="icon icon-table"></i>',
            datafield: 'header',
            width: 20,
            pinned: true,
            sortable: !1,
            filterable: !1,
        },
        {
            text: '客户名称',
            datafield: 'cusname',
            width: 80,
            pinned: true,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            cellsrenderer: function (row, column, value, defaultHtml, style, rowData) {
                // console.log(rowData)
                if (rowData.lock == 1) {
                    if (rows.indexOf(row) < 0) {
                        rows.push(row);
                    }
                    return '<i class="icon-lock" data-id="' + rowData.cusid + '"></i><div class="jqx-grid-cell-left-align" data-id="' + rowData.cusid + '">' + value + '</div>';
                }
                return '<i class="" data-id="' + rowData.cusid + '"></i><div class="jqx-grid-cell-left-align" data-id="' + rowData.cusid + '">' + value + '</div>';
            },
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '手机号码', datafield: 'cellphone', width: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '职位', datafield: 'position', width: 60, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '销售进度', datafield: 'progress', width: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '创建时间',
            datafield: 'createdTime',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '联系时间',
            datafield: 'lastActionTime',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '跟进人', datafield: 'userName', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '公司名称', datafield: 'company', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '公司地址', datafield: 'comAdress', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '公司类型', datafield: 'comType', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '经营范围',
            datafield: 'mainProduce',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '企业法人', datafield: 'operName', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '数据来源',
            datafield: 'customerSource',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '沟通状态', datafield: 'actState', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            cellsrenderer: function (row, column, value, defaultHtml, style, rowData) {
                return '<div class="jqx-grid-cell-text" data-id="' + rowData.cusid + '">' + (value.toString() == "0" ? "已沟通" : "未沟通") + '</div>';
            },
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '分配状态',
            datafield: 'isDistribution',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '电话结果',
            datafield: 'actionType',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '电话标签',
            datafield: 'lastAction',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '备注', datafield: 'remark', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '注册资本',
            datafield: 'registCapi',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '邮箱', datafield: 'email', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '微信', datafield: 'wechat', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: 'QQ', datafield: 'qq', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '短信状态', datafield: 'msgState', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '邮件状态', datafield: 'mailState', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '挂机短信状态',
            datafield: 'endcallMsgStatus',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '手机2', datafield: 'cellphone2', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '性别', datafield: 'gender', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '生日', datafield: 'birthday', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '前台电话', datafield: 'reception', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '座机', datafield: 'telephone', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '传真', datafield: 'fax', minwidth: 120, cellbeginedit: cellbeginedit, cellendedit: cellendedit,
            filtertype: "custom",
            createfilterpanel: function (datafield, filterPanel) {
                buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: '备用1',
            datafield: 'spare1',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filterable: !1,
        },
        {
            text: '备用2',
            datafield: 'spare2',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filterable: !1,
        },
        {
            text: '备用3',
            datafield: 'spare3',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filterable: !1,
        },
        {
            text: '备用4',
            datafield: 'spare4',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filterable: !1,
        },
        {
            text: '备用5',
            datafield: 'spare5',
            minwidth: 120,
            cellbeginedit: cellbeginedit,
            cellendedit: cellendedit,
            filterable: !1,
        },
        {
            text: ' ', datafield: 'callDuration', width: 35, editable: false, sortable: !1, filterable: !1,
            cellsrenderer: function (row, column, value, defaultHtml, style, rowData) {
                // console.log(rowData)
                return '<i class="icon v-icon video"  data-id="' + rowData.cusid + '"></i>';
            }
        },
        {
            text: ' ', datafield: 'callDownload', width: 35, editable: false, sortable: !1, filterable: !1,
            cellsrenderer: function (row, column, value, defaultHtml, style, rowData) {
                // console.log(rowData)
                return '<i class="icon v-icon download"   data-id="' + rowData.cusid + '"></i>';
            }
        },
    ];

    //设置筛选下拉内容的输入框
    var buildFilterPanel = function (filterPanel, datafield) {
        var textInput = $("<input class='filter-input' />");
        var applyinput = $("<div class='filter-btn-box'></div>");
        var filterbutton = $('<span class="filter-button" tabindex="0" >筛选</span>');
        applyinput.append(filterbutton);
        var filterclearbutton = $('<span class="filter-button" tabindex="0" >清除</span>');
        applyinput.append(filterclearbutton);
        filterPanel.append(textInput);
        filterPanel.append(applyinput);
        filterbutton.jqxButton();
        filterclearbutton.jqxButton();
        console.log(data);
        var dataSource =
            {
                localdata: data,
            }
        var dataadapter = new $.jqx.dataAdapter(dataSource,
            {
                autoBind: false,
                autoSort: true,
                autoSortField: datafield,
                async: false,
                uniqueDataFields: [datafield]
            });
        var column = $("#jqxtable").jqxGrid('getcolumn', datafield);
        textInput.jqxInput({
            placeHolder: "请输入" + column.text,
            popupZIndex: 9999999,
            displayMember: datafield,
            source: dataadapter
        });
        textInput.keyup(function (event) {
            if (event.keyCode === 13) {
                filterbutton.trigger('click');
            }
        });
        filterbutton.click(function () {
            var filtergroup = new $.jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = textInput.val();
            var filtercondition = 'contains';
            var filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filter_or_operator, filter1);
            // add the filters.
            $("#jqxtable").jqxGrid('addfilter', datafield, filtergroup);
            // apply the filters.
            $("#jqxtable").jqxGrid('applyfilters');
            $("#jqxtable").jqxGrid('closemenu');
        });
        filterbutton.keydown(function (event) {
            if (event.keyCode === 13) {
                filterbutton.trigger('click');
            }
        });
        filterclearbutton.click(function () {
            $("#jqxtable").jqxGrid('removefilter', datafield);
            // apply the filters.
            $("#jqxtable").jqxGrid('applyfilters');
            $("#jqxtable").jqxGrid('closemenu');
        });
        filterclearbutton.keydown(function (event) {
            if (event.keyCode === 13) {
                filterclearbutton.trigger('click');
            }
            textInput.val("");
        });
    }
    // create jqxtable.
    $("#jqxtable").jqxGrid({
        width: '100%',
        height: '100%',
        source: dataAdapter,
        columnsresize: true, //调整列的宽度
        scrollbarsize: 7,
        sortable: true, //排序
        filterable: true,
        ready: function () {
            // addfilter();
        },
        scrollmode: 'logical',
        altrows: true, //交替行，单数行和双数行不同
        pageable: true, //分页
        pagesize: 20, //每页显示行数
        pagermode: 'simple', //分页样式
        editable: true,
        editmode: 'dblclick', //双击
        selectionmode: 'checkbox', //选择框
        rowsheight: 40, //行高
        pagerheight: 50,
        //					showsortmenuitems: !1,
        columns: columns
    });


    //显示客户详细信息
    $("#jqxtable").on('cellclick', function (event) {
        // console.log(event);
        if (event.args.datafield == 'cusname') {
            customerShow();
        } else {
            return false;
        }
    });

    //表格内复选框
    $("#jqxtable").on('rowselect rowunselect', function (e) {
        var rowindexes = $('#jqxtable').jqxGrid('getselectedrowindexes');
        var setting = $(".table-setting");
        if (rowindexes.length > 0) {
            setting.fadeIn();
        } else {
            setting.fadeOut();
        }
        setting.find(".count-select").text(rowindexes.length);
    });


    //显示自定义表头
    $('#jqxtable').on('columnclick', function (event) {
        // console.log(event);
        console.log(event.args);
        if (event.args.datafield == 'header') {
            CustomHead();
        }
    });
    $(".table-setting").find(".close-gray").click(function () {
        $(".table-setting").fadeOut();
    });
});

//表格顶部设置隐藏
function settingHide() {
    var setting = $(".table-setting");
    setting.fadeOut();
}

//详情内下拉
function detailDrop(obj, event) {
    var $obj = $(obj).next(".h-r-drop");
    if ($obj.css("display") == "block") {
        $obj.hide();
        return false;
    }
    $obj.show();
    $(".layer-detail").one("click", function () {
        $(".h-r-drop").hide();
    });
    event.stopPropagation();
}
$(function () {
    $(".h-r-drop").click(function (event) {
        event.stopPropagation();
    })
});

//显示客户详情
function customerShow() {
    $("#detail").modal("show");
}

//详情内新建联系人
function addCustomer() {
    $("#customer").modal("show");
}
//下拉菜单
function menuDropdown(obj) {
    $(obj).dropdown();
}

//自定义表头
function CustomHead() {
    console.log("自定义表头");
    $("#customHead").modal("show");
}

//自定义表头
$(function () {
    var leftsource = [];
    var rightsource = [
        {label: '客户姓名', value: 'cusname'},
        {label: '手机号码', value: 'cellphone'},
        {label: '职位', value: 'position'},
        {label: '公司名称', value: 'company'},
        {label: '公司地址', value: 'comAdress'},
        {label: '销售进度', value: 'progress'},
        {label: '创建时间', value: 'createdTime'},
        {label: '联系时间', value: 'lastActionTime'},
        {label: '跟进人', value: 'userName'},
        {label: '公司类型', value: 'comType'},
        {label: '经营范围', value: 'mainProduce'},
        {label: '企业法人', value: 'operName'},
        {label: '数据来源', value: 'customerSource'},
        {label: '沟通状态', value: 'actState'},
        {label: '分配状态', value: 'isDistribution'},
        {label: '电话结果', value: 'actionType'},
        {label: '电话标签', value: 'lastAction'},
        {label: '备注', value: 'remark'},
        {label: '注册资本', value: 'registCapi'},
        {label: '邮箱', value: 'email'},
        {label: '微信', value: 'wechat'},
        {label: 'QQ', value: 'qq'},
        {label: '通话录音', value: 'callDuration'},
        {label: '短信状态', value: 'msgState'},
        {label: '邮件状态', value: 'mailState'},
        {label: '挂机短信状态', value: 'endcallMsgStatus'},
        {label: '手机2', value: 'cellphone2'},
        {label: '性别', value: 'gender'},
        {label: '生日', value: 'birthday'},
        {label: '前台电话', value: 'reception'},
        {label: '座机', value: 'telephone'},
        {label: '传真', value: 'fax'},
        {label: '备用1', value: 'spare1'},
        {label: '备用2', value: 'spare2'},
        {label: '备用3', value: 'spare3'},
        {label: '备用4', value: 'spare4'},
        {label: '备用5', value: 'spare5'}
    ];
    $("#list-left").jqxListBox({width: 200, height: 335, source: leftsource});
    $("#list-right").jqxListBox({width: 200, height: 335, source: rightsource});
});

//自定义表头的位置和显示
function listMove(directionIndex) {
    var box = "left";
    var obox = "right";
    var opposing = ["left", "right"];
    var direction = ["right", "left"];
    if (directionIndex >= 2) {
        box = obox = "right";
    } else {
        box = direction[directionIndex];
        obox = opposing[directionIndex];
    }
    var item = $("#list-" + box).jqxListBox('getSelectedItems');
    var Addindex;
    if (item.length > 0 && item[0] != undefined) {
        var removeIndex = $("#list-" + box).jqxListBox('getSelectedIndex');
        if (directionIndex == 2) {
            Addindex = removeIndex - 1;
        } else if (directionIndex == 3) {
            Addindex = removeIndex + 1;
        } else {
            Addindex = $("#list-" + obox).jqxListBox('getSelectedIndex');
        }
        $("#list-" + box).jqxListBox('removeAt', removeIndex);
        $("#list-" + obox).jqxListBox('insertAt', {label: item[0].label, value: item[0].value}, Addindex);
        $("#list-" + obox).jqxListBox('selectItem', item[0].value);
    }
}

//自定义表头保存
function customSubmit() {
    var itemShow = $("#list-right").jqxListBox('getItems');
    var itemHide = $("#list-left").jqxListBox('getItems');
    $("#jqxtable").jqxGrid('beginupdate');
    for (var i = 0; i < itemShow.length; i++) {
        $("#jqxtable").jqxGrid('showcolumn', itemShow[i].value);
    }
    for (var i = 0; i < itemHide.length; i++) {
        $("#jqxtable").jqxGrid('hidecolumn', itemHide[i].value);
    }
    // console.log(itemShow);
    // console.log(itemHide);
    $("#jqxtable").jqxGrid('endupdate');
    $("#customHead").modal("hide");
}


//添加用户提交
function customAdd(){
    alert("","添加成功",function(){
        //新增客户弹框隐藏
        $("#customer").modal("hide");
    },{type:"success"});
}

//客户详情切换
function tags(obj) {
    var $obj = $(obj);
    var objli = $obj.parent(".tags-li");
    if (objli.hasClass("active")) {
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
    if ($(obj).hasClass("active")) {
        dMain.show();
        $(obj).removeClass("active")
    } else {
        dMain.hide();
        $(obj).addClass("active");
    }
}